import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ ok: true }); 
});
app.get('/health', (req, res) => {
  res.send('healthy');     
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
