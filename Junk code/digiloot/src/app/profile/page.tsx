"use client";
import { useUser } from "../../context/userContext";


export default function Profile() {
  const { user, userVerify } = useUser();

  return (
    <main>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>Display Name: {user.displayName || 'No display name'}</p>
          <p>
            Email Verified: {user.emailVerified ? "Yes" : "No"}
          </p>
          {user.emailVerified ? (
            <p>Your email is verified.</p>
          ) : (
            <p>Your email is not verified. Please check your inbox for a verification email.</p>
          )}
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </main>
  );
}
