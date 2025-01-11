const express = require("express");
const {Register , Login , Logout } = require("../controllers/Auth");
const AuthRoutes = express.Router()




AuthRoutes.post('/register' , Register)
AuthRoutes.post('/login' , Login)
AuthRoutes.post('/logout' , Logout)









module.exports = AuthRoutes