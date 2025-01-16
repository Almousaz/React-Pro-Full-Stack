import ProductModal from "../models/Product.js";

const ProductCreate = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { title, desc, Image_url } = req.body;
    if (!title || !desc || !Image_url || !userId) {
      return res
        .status(303)
        .json({ success: false, message: "Title are required" });
    }
    const CreateProduct = new ProductModal({
      title,
      userId,
      desc,
      Image_url,
    });
    await CreateProduct.save();
    res.status(200).json({
      success: true,
      message: "Product Added Successfully",
      product: CreateProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const ProductId = req.params.id;
    const { title, desc, ImageUrl } = req.body;
    const FindProduct = await ProductModal.findById({ _id: ProductId });
    if (!FindProduct) {
      res.status(404).json({ success: false, message: "Products not Found" });
    }

    const UpdateProduct = await ProductModal.findByIdAndUpdate(
      { _id: ProductId },
      { title, desc, ImageUrl },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Product Updates Successfully",
        UpdateProduct,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const ProductId = req.params.id;
    const FindProduct = await ProductModal.findById(ProductId);

    if (!FindProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product Not Found" });
    }
    const Delete = await ProductModal.findByIdAndDelete(ProductId);

    res
      .status(200)
      .json({
        success: true,
        message: "Product deleted Deleted Successfully",
        Delete,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const GetProducts = async (req, res) => {
  try {
    const UserId = req.params.userId;

    const Products = await ProductModal.find({ userId: UserId });

    res.status(200).json({ success: true, Products });
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } catch (error) {}
};

export { ProductCreate, UpdateProduct, DeleteProduct , GetProducts };
