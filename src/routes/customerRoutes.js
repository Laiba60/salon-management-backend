import express from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
} from "../controllers/customerController.js";
const router = express.Router();
router.post("/create", createCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
export default router;
