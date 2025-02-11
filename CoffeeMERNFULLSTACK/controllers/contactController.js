
import ContactModel  from "../models/contact.model.js"


//post message to admin
 const postContact= async(req,res)=>{
    const data=req.body
    try{
        const contact= new ContactModel(data)
        await contact.save()
        return res.send({mssg:"Message Sent",data:contact})

    }catch(err){
        return res.status(500).send("Internal Server error")

    }
}

//get contact
const getContact= async(req,res)=>{
    try{
       const contData=await ContactModel.find({})

       if(contData.length===0)
       {
        return res.send({mssg:"No data found"})
       }

       const cont = contData.map((el) => ({
        id: el._id,
        name:el.name,
        email: el.email,
        desc: el.desc,
      }));

       return res.send({data:cont})
    }catch(err){
       return res.status(500).send({message:err.message})
    }
}


export {postContact , getContact}

