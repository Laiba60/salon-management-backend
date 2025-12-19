import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 FORCE dotenv to load from root
dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import customerRoutes from "./routes/customerRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Salon Backend API is running");
});

app.use("/customers", customerRoutes);
app.use("/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("JWT_SECRET:", process.env.JWT_SECRET); // 🔍 DEBUG
  console.log(`Server running on port ${PORT}`);
});
