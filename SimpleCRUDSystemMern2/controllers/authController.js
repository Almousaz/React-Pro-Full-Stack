import validator from 'validator';
import User from '../models/user.js';
import passport from 'passport';


const UserSignup = async (req, res, next) => {
    const { email, password, userName } = req.body;
    const validationErrors = [];

    // Validation logic
    if (!validator.isEmail(email)) {
        validationErrors.push({ msg: "Please enter a valid email address." });
    }
    if (!validator.isLength(password, { min: 8 })) {
        validationErrors.push({ msg: "Password must be at least 8 characters long." });
    }
    if (!userName || !validator.isLength(userName, { min: 3 })) {
        validationErrors.push({ msg: "Username must be at least 3 characters long." });
    }

    if (validationErrors.length) {
        return res.status(400).json({ errors: validationErrors });
    }

    try {
        req.body.email = validator.normalizeEmail(email, {
            gmail_remove_dots: false,
        });

        const existingUser = await User.findOne({
            $or: [{ email }, { userName }],
        });

        if (existingUser) {
            return res.status(400).json({
                errors: [{ msg: "Account with that email address or username already exists." }],
            });
        }

        const user = new User({
            userName,
            email,
            password,
        });

        await user.save();

        res.status(201).json({
            msg: "Your account has been created successfully.",
            user: { userName: user.userName, email: user.email },
        });
    } catch (err) {
        return next(err);
    }
};

const getUserSignup = (req, res) => {
    if (req.user) {
      return res.status(200).json({
        message: "You are already logged in.",
        redirectTo: "/profile"  // Frontend will handle this redirection
      });
    }
  
    return res.status(200).json({
      message: "You can proceed to the signup page.",
      redirectTo: "/signup"  // Frontend will handle this redirection
    });
  };
  

  const postLoginUser = async (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email)) {
      validationErrors.push({ msg: "Please enter a valid email address." });
    }
    if (validator.isEmpty(req.body.password)) {
      validationErrors.push({ msg: "Password cannot be blank." });
    }

    if (validationErrors.length) {
      return res.status(400).json({ errors: validationErrors });
    }
   
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ errors: info });
      }
      
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        // console.log("🔹 Login Request Received:", req.body);
        // console.log("🔹 Session Info:", req.session);
        // console.log("🔹 Passport Auth Status:", req.isAuthenticated());

        // Respond with user data or a success message
        res.status(200).json({ success: "You are logged in!", user });
      });
    })(req, res, next);
};
   

const getLoginUser = async (req, res) => {
    try {
      if (req.user) {
        return res.status(200).json({ message: "User already logged in", user: req.user });
      }
  
      // If user is not logged in, just send a status
      return res.status(200).json({ message: "Please log in" });
    } catch (error) {
      console.error("Error in getLogin:", error);
      return res.status(500).json({ error: "Server error" });
    }
  };    






const logOutUser = async (req, res) => {
    try {
      req.logout((err) => {
        if (err) {
          console.error('Error during logout:', err);
          return res.status(500).json({ message: 'Logout failed', error: err });
        }
  
        req.session.destroy((err) => {
          if (err) {
            console.log("Error: Failed to destroy the session during logout.", err);
            return res.status(500).json({ message: "Session destruction failed", error: err });
          }
  
          req.user = null;
          return res.status(200).json({ message: "Logged out successfully" });
        });
      });
    } catch (error) {
      console.error("Error in logout:", error);
      return res.status(500).json({ message: "Server error", error });
    }
  };


export { UserSignup , getUserSignup , postLoginUser , getLoginUser ,logOutUser };
