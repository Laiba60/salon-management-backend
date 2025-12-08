import express from "express";
const router = express.Router();

let products = [
  { id: 1, name: "Shampoo" },
  { id: 2, name: "Hair Oil" },
];

// GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

// GET /api/products/:id
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST /api/products
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

export default router;
