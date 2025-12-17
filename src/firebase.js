
import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serviceAccountPath = path.join(__dirname, "fir-project-cb4f1-firebase-adminsdk-fbsvc-3fbbf48ec8.json");
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
export default db;
