
import mongoose from "mongoose";


const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

const AboutModel = mongoose.model("about", aboutSchema);

export default AboutModel