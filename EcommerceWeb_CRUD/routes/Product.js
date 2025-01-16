import express from "express";
import { DeleteProduct, GetProducts, ProductCreate , UpdateProduct } from "../controllers/Product.js";

const ProductRoutes = express.Router()

ProductRoutes.post('/create/:userId' , ProductCreate )
ProductRoutes.put('/update/:id' , UpdateProduct)
ProductRoutes.delete('/delete/:id' , DeleteProduct )
ProductRoutes.get('/getProducts/:userId' , GetProducts ) 




export default ProductRoutes