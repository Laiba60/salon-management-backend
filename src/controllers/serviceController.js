import db from "../config/firebase.js";

export const createService = async (req, res) => {
  try {
    const { name, price, duration } = req.body;
    await db.collection("services").add({ name, price, duration, createdAt: new Date() });

    res.status(201).json({ message: "Service created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating service" });
  }
};

export const getServices = async (req, res) => {
  try {
    const snapshot = await db.collection("services").get();
    const services = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services" });
  }
};
