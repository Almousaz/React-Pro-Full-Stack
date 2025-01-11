const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userSechmea= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    role:{
        type:String,
        enum:['admin',"user"],
        default:"user"
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


const UserModel= mongoose.model('users',userSechmea)

module.exports = UserModel