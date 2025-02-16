import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from 'fs'
import Post from "../models/Post.js";

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

const profileUser =  (req , res) => {


    const {token} = req.cookies
    jwt.verify(token, process.env.JWT_SECRET , {}, (err,info) => {
        if (err) throw err;
        res.json(info);
    })

}

const logoutUser = (req , res) => {
    res.cookie('token' , '').json('ok')
}


const createPost = async (req , res) => {

    const {originalname,path} = req.file;
    
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, process.env.JWT_SECRET, {}, async (err,info) => {
    if (err) throw err;
    const {title,summary,content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover:newPath,
      author:info.id,
    });
    res.json(postDoc);
  });
}

    
    


   


const getPosts = async (req , res) => {
     const posts = await Post.find()
     res.json(
        await Post.find()
          .populate('author', ['username'])
          .sort({createdAt: -1})
          .limit(20)
      );

}

const getOnePost = async (req , res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
}

const updatePost = async (req, res) => {
    let newPath = null;
    if (req.file) {
      const { originalname, path } = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path + '.' + ext;
      fs.renameSync(path, newPath);
    }
  
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
      if (err) throw err;
      const { id, title, summary, content } = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('You are not the author');
      }
  
      // Update fields directly
      postDoc.title = title;
      postDoc.summary = summary;
      postDoc.content = content;
      postDoc.cover = newPath ? newPath : postDoc.cover;
  
      // Save the document
      await postDoc.save();
    
      res.json(postDoc);
    });
  }
  





export {registerUser , loginUser , profileUser , logoutUser , createPost , getPosts , getOnePost , updatePost }