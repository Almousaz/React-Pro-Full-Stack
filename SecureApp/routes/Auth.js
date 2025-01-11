const express = require("express");
const register = require("../controllers/Auth");
const AuthRoutes = express.Router()




AuthRoutes.post('/register' , register)









module.exports = AuthRoutes