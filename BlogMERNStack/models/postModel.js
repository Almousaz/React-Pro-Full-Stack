
import mongoose , { Schema } from  "mongoose";



const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: {
        type: String, enum: ["Agriculture",
            "Business", "Education", "Entertainment",
            "Art", "Investment", "Uncategorized", "Weather", "Technology", "Game"], message: "{VALUE is not supported}"
    },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    thumbnail: { type: String, required: true }
}, { timestamps: true })


export const Post = mongoose.model("Posts", postSchema);