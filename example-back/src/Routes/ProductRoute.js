import express from "express";
import {
  createProducts,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProducts,
} from "../Controller/ProductController.js";
export const productRoute = express.Router();

productRoute
  .get("/product", getProducts)
  .get("/product/:id", getProductsById)
  .post("/product", createProducts)
  .put("/product/:id", updateProducts)
  .delete("/product/:id", deleteProducts);
