"use server"

import { app } from "../../lib/firebase-admin"; // Adjust the path accordingly
import { getFirestore } from "firebase-admin/firestore";

export default async function FirebaseAdmin(req, res) {
  const db = getFirestore(app);
  
  // Your server-side logic here
  res.status(200).json({ message: "Success!" });
}
