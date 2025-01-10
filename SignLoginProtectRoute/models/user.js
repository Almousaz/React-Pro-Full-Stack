const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });
    return token;
  };

  const User = mongoose.model("user", userSchema);

  const validate = (data) => {
    const schema = Joi.object({
      username: Joi.string().required().label("Username"),
      email: Joi.string().required().email().label("Email"),
      password: passwordComplexity().required().label("Password"),
    });
  
    return schema.validate(data);
  };
  module.exports = { User, validate };