import mongoose from "mongoose";


const productSchema= new mongoose.Schema({
   title:String,
   image:String,
   desc:String,
   price:String
})

const ProductModel= mongoose.model("product",productSchema)

export default ProductModel