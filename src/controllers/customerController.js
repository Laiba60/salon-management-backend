import db from "../config/firebase.js";


export const createCustomer = async (req, res) => {
  try {
    const customerData = req.body;

    const docRef = await db.collection("customers").add(customerData);

    res.status(201).json({
      message: "Customer created successfully",
      id: docRef.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAllCustomers = async (req, res) => {
  try {
    const snapshot = await db.collection("customers").get();

    const customers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const doc = await db.collection("customers").doc(id).get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({
      id: doc.id,
      ...doc.data(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
