import { ProductsModel } from "../Model/ProductModel.js";

export const getProducts = async (req, res) => {
  const products = await ProductsModel.find({});
  res.send(products);
};
export const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductsModel.findById(id);
  res.send(product);
};

export const createProducts = async (req, res) => {
  const {img, name, category, price } = req.body;
  const newProduct = new ProductsModel({img, name, category, price } );
  await newProduct.save();
  res.send("Got a POST request");
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const {img, name, category, price } = req.body;
  const product = await ProductsModel.findByIdAndUpdate(id,{img, name, category, price } );
  res.send("Got a PUT request at /product");
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const product = await ProductsModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /product");
};
