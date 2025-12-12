
import express from "express";
import db from "../firebase.js"; 

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("products").get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting products" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const doc = await db.collection("products").doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ message: "Product not found" });
    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting product" });
  }
});


router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const docRef = await db.collection("products").add(newProduct);
    res.status(201).json({ id: docRef.id, ...newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding product" });
  }
});

export default router;
