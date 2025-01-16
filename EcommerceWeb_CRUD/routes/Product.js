import express from "express";
import { ProductCreate , Update } from "../controllers/Product.js";

const ProductRoutes = express.Router()

ProductRoutes.post('/create/:userId' , ProductCreate )
ProductRoutes.put('/update/:id' , Update)





export default ProductRoutes