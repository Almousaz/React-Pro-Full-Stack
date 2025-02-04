import mongoose from "mongoose";

// Create a Schema corresponding to the document structure.
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
    autoIndex: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create a Model.
const User = models.User || model("User", userSchema);

export default User;
