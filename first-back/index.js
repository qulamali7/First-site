import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { productRoute } from "./src/Routes/ProductRoute.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", productRoute);

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
