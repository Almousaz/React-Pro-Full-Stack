const express = require("express");
const AdminRoutes = express.Router()
const { Getuser , deletUser }  = require("../controllers/Admin");
const { isAdmin } = require("../middleware/verifyToken")

AdminRoutes.get('/getuser', isAdmin , Getuser)
AdminRoutes.delete('/delete/:id', isAdmin , deletUser )



module.exports = AdminRoutes

