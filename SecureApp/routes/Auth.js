const express = require("express");
const {Register , Login , Logout , CheckUser } = require("../controllers/Auth");
const { IsUser } = require('../middleware/verifyToken.js')
const AuthRoutes = express.Router()




AuthRoutes.post('/register' , Register)
AuthRoutes.post('/login' , Login)
AuthRoutes.post('/logout' , Logout)
AuthRoutes.get('/CheckUser', IsUser , CheckUser)








module.exports = AuthRoutes