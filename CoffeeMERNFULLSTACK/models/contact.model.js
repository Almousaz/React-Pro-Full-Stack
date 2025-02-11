import mongoose from "mongoose";

const contactSchema= new mongoose.Schema({
   name:String,
   email:String,
   desc:String,
})

const ContactModel= mongoose.model("contact",contactSchema)

export default ContactModel