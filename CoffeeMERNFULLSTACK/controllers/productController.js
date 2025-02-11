import ProductModel from "../models/product.model.js";

//product post
const productPost= async (req,res)=>{
    const data=req.body;
    try{
        const product= await ProductModel.findOne(data)

        if(product){
            return res.send({mssg:"Product Already Exists"})
        }
        else{
            const prod= new ProductModel(data)
            await prod.save()
            res.send({ mssg: "Product Added Successful", data: prod });
        }

    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
}

//get Product
const getProduct = async(req,res)=>{
    try{
        const produt= await ProductModel.find({})
        //check product is present in db or not
        if(produt.length===0){
            return res.status(404).json({ success: false, message: "No data found" });
        }

        const dataProduct = produt.map(el=>({
            id:el._id,
            title:el.title,
            image:el.image,
            desc:el.desc,
            price:el.price  
           }))
      
           return res.status(200).json({ status: true, data: dataProduct });

    }catch(err){
        return res.status(500).json({ success: false, message: err.message });
    }
}

//delete product;
const deleteProduct = async (req, res) => {
    const productId = req.params.id; 
  
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      return res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  };
  
//update
const updateProduct =async(req,res)=>{
    try {
        const productId = req.params.id;
        const updateData = req.body;
    
        // Check if the product ID exists in the db or not
        const product = await ProductModel.findById(productId);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        // If the product exists, update the data
        await ProductModel.findByIdAndUpdate(productId, updateData);
    
        return res.json({ message: 'Product updated successfully' });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
}


export {productPost , getProduct , updateProduct , deleteProduct}