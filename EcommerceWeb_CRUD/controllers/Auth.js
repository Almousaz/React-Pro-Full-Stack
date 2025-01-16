import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(303)
        .json({ success: true, message: "All failed are required" });
    }
    const ExistUser = await UserModel.findOne({ email });
    if (ExistUser) {
      return res
        .status(402)
        .json({ success: false, message: "User Already Exist Please Login" });
    }
    const hashPassword = await bcrypt.hashSync(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "User Register Successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(303)
        .json({ success: false, message: "All failed are required" });
    }
    const FindUser = await UserModel.findOne({ email });
    if (!FindUser) {
      return res
        .status(303)
        .json({ success: false, message: "Account Not found please register" });
    }
    const ChecPassword = await bcrypt.compare(password, FindUser.password);
    if (!ChecPassword) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid Password" });
    }
    return res.status(200).json({success : true , message : "User Login Successfully" , user : FindUser})
  } catch (err) {
    console.log(err)
    return res.status(500).json({success : false , message : "Internal server Error"})
  }
};














export { Register, Login };
