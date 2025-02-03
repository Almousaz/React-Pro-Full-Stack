import { User } from "../models/User.js";
import { Product } from "../models/Product.js";

const RegisterUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save(); // Await the save operation
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error saving user:", err);
    return res.status(400).json({ success: false, error: err.message });
  }
};

const LoginUser = async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });
    }

    // Compare the password
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(400).json({
        loginSuccess: false,
        message: "Wrong password",
      });
    }

    // Generate a token
    const token = await user.generateToken();

    // Set cookies and respond with success
    res.cookie("w_authExp", user.tokenExp);
    res.cookie("w_auth", token).status(200).json({
      loginSuccess: true,
      userId: user._id,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ loginSuccess: false, error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ isAuth: false, error: "User not authenticated" });
    }

    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role && req.user.role !== 0, // Ensures correct admin check
      isAuth: true,
      email: req.user.email ?? "",
      name: req.user.name ?? "",
      lastname: req.user.lastname ?? "",
      role: req.user.role ?? 0,
      image: req.user.image ?? "",
      cart: req.user.cart ?? [],
      history: req.user.history ?? [],
    });
  } catch (err) {
    console.error("Error in getUser:", err);
    res.status(500).json({ isAuth: false, error: err.message });
  }
};

const LogOutUser = async (req, res) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, error: "User not authenticated" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { token: "", tokenExp: "" },
      { new: true } // Ensures the updated document is returned
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const getAddToCart = async (req, res) => {
  try {
    const userInfo = await User.findOne({ _id: req.user._id });

    if (!userInfo) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const productId = req.query.productId;
    const duplicate = userInfo.cart.some((item) => item.id == productId);

    let updatedUser;

    if (duplicate) {
      updatedUser = await User.findOneAndUpdate(
        { _id: req.user._id, "cart.id": productId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true }
      );
    } else {
      updatedUser = await User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: productId,
              quantity: 1,
              date: Date.now(),
            },
          },
        },
        { new: true }
      );
    }

    if (!updatedUser) {
      return res
        .status(500)
        .json({ success: false, error: "Failed to update cart" });
    }

    res.status(200).json(updatedUser.cart);
  } catch (err) {
    console.error("Add to Cart Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const getDeleteFromCart = async (req, res) => {
  try {
    // Remove product from cart
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { cart: { id: req.query._id } } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const cart = updatedUser.cart;
    const productIds = cart.map((item) => item.id);

    // If cart is empty, return without fetching product details
    if (productIds.length === 0) {
      return res.status(200).json({ cartDetail: [], cart });
    }

    // Fetch updated cart details
    const cartDetail = await Product.find({ _id: { $in: productIds } })
      .populate("writer")
      .exec();

    res.status(200).json({ cartDetail, cart });
  } catch (err) {
    console.error("Delete from Cart Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const getUserCartInfo = async (req, res) => {
  try {
    // Find user and get cart info
    const userInfo = await User.findOne({ _id: req.user._id });

    if (!userInfo) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const cart = userInfo.cart;
    const productIds = cart.map((item) => item.id);

    // If cart is empty, return without fetching product details
    if (productIds.length === 0) {
      return res.status(200).json({ success: true, cartDetail: [], cart });
    }

    // Fetch product details
    const cartDetail = await Product.find({ _id: { $in: productIds } })
      .populate("writer")
      .exec();

    res.status(200).json({ success: true, cartDetail, cart });
  } catch (err) {
    console.error("Get User Cart Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const SuccessBuy = async (req, res) => {
  try {
    let history = [];
    let transactionData = {};

    // 1. Store Payment Information in User Collection
    req.body.cartDetail.forEach((item) => {
      history.push({
        dateOfPurchase: Date.now(),
        name: item.title,
        id: item._id,
        price: item.price,
        quantity: item.quantity,
        paymentId: req.body.paymentData.paymentID,
      });
    });

    // 2. Store Payment Information in Payment Collection
    transactionData.user = {
      id: req.user._id,
      name: req.user.name,
      lastname: req.user.lastname,
      email: req.user.email,
    };

    transactionData.data = req.body.paymentData;
    transactionData.product = history;

    // Update user history and clear cart
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { history: history }, $set: { cart: [] } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Save payment details
    const payment = new Payment(transactionData);
    const savedPayment = await payment.save();

    // 3. Increase the sold quantity for each product
    const bulkOperations = savedPayment.product.map((item) => ({
      updateOne: {
        filter: { _id: item.id },
        update: { $inc: { sold: item.quantity } },
      },
    }));

    await Product.bulkWrite(bulkOperations);

    res.status(200).json({
      success: true,
      cart: user.cart,
      cartDetail: [],
    });
  } catch (err) {
    console.error("Error processing purchase:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const getHistory = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, history: user.history });
  } catch (err) {
    console.error("Error fetching history:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export {
  RegisterUser,
  LoginUser,
  getUser,
  LogOutUser,
  getAddToCart,
  getDeleteFromCart,
  getUserCartInfo,
  SuccessBuy,
  getHistory,
};
