// pages/verify-email.js

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebase"; // Adjust the path to your Firebase config
import { applyActionCode } from "firebase/auth";

export default function VerifyEmail() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { oobCode } = router.query; // `oobCode` is the parameter Firebase sends in the URL

  useEffect(() => {
    if (oobCode) {
      // Verify the email with the oobCode from the URL
      applyActionCode(auth, oobCode)
        .then(() => {
          setMessage("Email verified successfully!");
          // Optionally, reload the user to get the updated emailVerified status
          auth.currentUser.reload().then(() => {
            router.push("/profile"); // Redirect to the profile page or wherever you want
          });
        })
        .catch((error) => {
          setMessage("Error verifying email: " + error.message);
        });
    }
  }, [oobCode]);

  return (
    <main>
      <h1>Email Verification</h1>
      <p>{message}</p>
    </main>
  );
}
