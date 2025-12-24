import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import express from "express";

import authRoutes from "./routes/authRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

import authMiddleware from "./middlewares/authMiddleware.js";

// __dirname setup (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(express.json());

// 🌐 Public route
app.get("/", (req, res) => {
  res.send("Salon Backend API is running");
});

// 🔓 Public auth routes
app.use("/auth", authRoutes);

// 🔒 Protected routes
app.use("/customers", authMiddleware, customerRoutes);
app.use("/appointments", authMiddleware, appointmentRoutes);
app.use("/services", authMiddleware, serviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
