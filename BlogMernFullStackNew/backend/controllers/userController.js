import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req , res) => {

        const {username , password} = req.body

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
    
    try{
        const userDoc = await User.create({
          username,
          password:passwordHash
        });
        res.json(userDoc);
      } catch(err) {
        console.log(err);
        res.status(400).json(err);
      }
    
}

const loginUser = async (req , res) => {
    const {username,password} = req.body
    const userDoc = await User.findOne({username})

    const passOk = bcrypt.compareSync(password , userDoc.password)
    

    if (passOk) {
        // logged in
        jwt.sign({username,id:userDoc._id}, process.env.JWT_SECRET, {}, (err,token) => {
          if (err) throw err;
        //   res.json(token)
          res.cookie('token', token).json({
            id:userDoc._id,
            username,
          });
        });
      } else {
        res.status(400).json('wrong credentials');
      }
    ;


}













export {registerUser , loginUser}