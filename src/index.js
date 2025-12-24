import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";


import authRoutes from "./routes/authRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";


import authMiddleware from "./middlewares/authMiddleware.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Salon Backend API is running");
});

app.use("/auth", authRoutes);

app.use("/customers", authMiddleware, customerRoutes);
app.use("/services", authMiddleware, serviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
