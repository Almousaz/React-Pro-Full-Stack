import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signupUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword, photo } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      photo,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: `server ${err}` });
  }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userDoc = await User.findOne({ username });

        if (!userDoc) {
            return res.status(400).json({ message: "User not found" });
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (!passOk) {
            return res.status(400).json({ message: "Wrong credentials" });
        }

        jwt.sign(
            { username, id: userDoc._id },
            process.env.JWT_SECRET,
            {},
            (err, token) => {
                if (err) {
                    console.error("JWT Sign Error:", err);
                    return res.status(500).json({ message: "Internal Server Error" });
                }

                res.cookie("token", token, { httpOnly: true }).json({
                    id: userDoc._id,
                    username,
                });
            }
        );
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};






export { signupUser , loginUser };
