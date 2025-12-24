import express from "express";
import { createService, getServices } from "../controllers/serviceController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, roleMiddleware("admin"), createService);
router.get("/", authMiddleware, getServices);

export default router;
