// const LocalStrategy = require("passport-local").Strategy;
import { Strategy as LocalStrategy } from 'passport-local';

import mongoose from "mongoose";
import User from "../models/user.js";



// Passport local strategy for user authentication
const localStrategy = (passport) => {
    
    passport.use(
        new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
          try {
            const user = await User.findOne({ email: email.toLowerCase() });
            if (!user) {
              console.log('User not found!');
              return done(null, false, { msg: `Email ${email} not found.` });
            }
      
            if (!user.password) {
              console.log('User does not have a password set');
              return done(null, false, {
                msg: "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
              });
            }
      
            const isMatch = await user.comparePassword(password);
            if (isMatch) {
              console.log('Password match successful!');
              return done(null, user);
            } else {
              console.log('Invalid password!');
              return done(null, false, { msg: "Invalid email or password." });
            }
          } catch (err) {
            console.error('Error during login:', err);
            return done(err);
          }
        })
      );
      




  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};


export {localStrategy}