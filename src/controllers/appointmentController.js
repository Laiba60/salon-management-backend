import db from "../config/firebase.js";
import validateAppointment from "../validators/appointmentValidator.js";
export const createAppointment = async (req, res) => {
  try {
    const error = validateAppointment(req.body);
    if (error) {
      return res.status(400).json({ error });
    }
    const appointmentData = req.body;
    const docRef = await db
      .collection("appointments")
      .add(appointmentData);
    res.status(201).json({
      message: "Appointment created successfully",
      id: docRef.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllAppointments = async (req, res) => {
  try {
    const snapshot = await db.collection("appointments").get();

    const appointments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const doc = await db.collection("appointments").doc(id).get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      id: doc.id,
      ...doc.data(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
