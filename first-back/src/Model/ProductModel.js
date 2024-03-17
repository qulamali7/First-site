import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  img: String,
  name: String,
  category: String,
  price: Number,
});

export const ProductsModel = mongoose.model("products", productSchema);
