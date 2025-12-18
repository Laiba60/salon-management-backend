import express from "express";
import customerRoutes from "./routes/customerRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
 

const app = express();
app.use(express.json());


app.use('/auth', authRoutes);


app.get("/", (req, res) => {
  res.send("Salon Backend API is running");
});


app.use("/customers", customerRoutes);
app.use("/appointments", appointmentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
