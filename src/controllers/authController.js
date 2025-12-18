// src/controllers/authController.js
import { hashPassword, comparePassword } from '../utils/hash.js';
import { generateToken } from '../utils/jwt.js';
import  db  from '../config/firebase.js';

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    
    const userRef = db.collection('users').doc(email);
    const doc = await userRef.get();
    if (doc.exists) return res.status(400).json({ message: "User already exists" });

   
    const hashedPassword = await hashPassword(password);

    
    await userRef.set({
      name,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRef = db.collection('users').doc(email);
    const doc = await userRef.get();

    if (!doc.exists) return res.status(404).json({ message: "User not found" });

    const user = doc.data();
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken({ id: doc.id, email: user.email, role: user.role });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
