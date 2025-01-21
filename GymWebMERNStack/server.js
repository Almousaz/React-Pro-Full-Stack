import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import { sendEmail } from "./utils/sendEmail.js";


const app = express()
const router = express.Router()

config({path : "./config.env"})

app.use(express.json());
app.use(cors({
  credentials: true,
  methods : ["POST"],
  origin: [process.env.FRONTEND_URL]  
}));
app.use(express.urlencoded({ extended: true }));


// router.get("/" , (req , res , next) => {
//     res.json({
//         success : true , 
//         message : 'habibi come to dubai'
//     })
// })


router.post("/send/email", async (req, res, next) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return next(
        res.status(400).json({
          success: false,
          message: "Please provide all details",
        })
      );
    }
    try {
      await sendEmail({
        email: "mousazada.ali@gmail.com",
        subject: "GYM WEBSITE CONTACT",
        message,
        userEmail: email,
      });
      res.status(200).json({
        success: true,
        message: "Message Sent Successfully.",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: " Internal Server Error",
      });
    }
  });





app.use(router)









const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

