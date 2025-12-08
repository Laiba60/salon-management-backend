import express from "express";
import dotenv from "dotenv";
dotenv.config();

import productsRouter from "./routes/products.js";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
