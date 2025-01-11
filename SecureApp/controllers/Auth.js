const express = require("express");
const UserModel = require("../models/user")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body
           
        const existUser= await UserModel.findOne({email})
        if (existUser) {
            return res.status(401).json({success:false,message:"User already Exist"})
        }
            const hasepassword = bcryptjs.hashSync(password,10)
            
        const newUser= new UserModel({
            name,email,password:hasepassword
        })
        
          await newUser.save()

          res.status(200).json({message:"user register successfully",newUser})
    } catch (error) {
        res.status(500).json({success:false,message:"interanl server error"})
        console.log(error)
    }
}


module.exports =  register ;