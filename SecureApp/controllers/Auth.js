const express = require("express");
const UserModel = require("../models/user")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const Register=async(req,res)=>{
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

const Login=async(req,res)=>{
    try {
          const {email,password}=req.body

          const user=await UserModel.findOne({email})

          if (!user) {
              return res.status(404).json({success:false,message:"Invalid credentials"})
          }

          const ispassaowrdValid= await bcryptjs.compare(password,user.password)
          if (!ispassaowrdValid) {
            return res.status(404).json({success:false,message:"Invalid credentials"})
            
          }
               const token= jwt.sign({userId:user._id},process.env.JWT_SECRETE)

                res.cookie('token',token,{
                    httpOnly: true,
                    secure: false,
                    maxAge: 3600000,
                    
                })
              res.status(200).json({success:true,message:"Login successfully",user,token})

    } catch (error) {
        res.status(500).json({success:false,message:"interanl server error"})
        console.log(error)
    }
}


const Logout=async(req,res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json({message:"user Logout successfully"})
    } catch (error) {
        res.status(500).json({success:false,message:"interanl server error"})
        console.log(error)
    }
  }







module.exports =  { Register , Login , Logout } ;