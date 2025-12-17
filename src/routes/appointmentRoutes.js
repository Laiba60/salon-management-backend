import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/create", createAppointment);
router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);

export default router;
