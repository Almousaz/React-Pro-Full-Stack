import { User } from "../models/User.js";




const auth = async (req, res, next) => {
  try {
    let token = req.cookies.w_auth;

    if (!token) {
      return res.status(401).json({ isAuth: false, error: "No token provided" });
    }

    // Use await to find the user by token
    const user = await User.findByToken(token);
    if (!user) {
      return res.status(401).json({ isAuth: false, error: "User not found" });
    }

    // Attach user data to request
    req.token = token;
    req.user = user;

    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(500).json({ isAuth: false, error: err.message });
  }
};

export { auth };
