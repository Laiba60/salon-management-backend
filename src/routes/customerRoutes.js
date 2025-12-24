import express from "express";
import { createCustomer, getAllCustomers } from "../controllers/customerController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createCustomer);
router.get("/", authMiddleware, getAllCustomers);

export default router;
