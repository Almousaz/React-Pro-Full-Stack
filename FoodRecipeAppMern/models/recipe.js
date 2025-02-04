import mongoose from "mongoose";

// Create a Schema corresponding to the document structure.
const recipeSchema = new mongoose.Schema(
  {
    user: { type: SchemaTypes.ObjectId, ref: "User" },
    title: { type: String, required: true, index: true },
    description: { type: String, required: true, index: true },
    note: { type: String, index: true },
    ingredients: { type: String, required: true, index: true },
    image: {
      url: { type: String, required: true },
      id: { type: String, required: true },
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create a Model.
const Recipe = models.Recipe || model("Recipe", recipeSchema);

export default Recipe;
