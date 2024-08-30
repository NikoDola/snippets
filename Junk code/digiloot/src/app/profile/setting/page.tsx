"use client";

import { useUser } from "@/context/userContext";
import { FormEvent } from 'react';

export default function Setting() {
  const { changePassword, error, setError } = useUser();

  const handlePasswordUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newPass = formData.get('new') as string;
    const confirm = formData.get('confirm') as string;

    if (newPass === confirm) {
      try {
        await changePassword(newPass);
      } catch (error) {
        console.error(error);
      }
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <main>
      <form onSubmit={handlePasswordUpdate}>
        <input type="password" name="new" placeholder="New Password" required />
        <input type="password" name="confirm" placeholder="Confirm Password" required />
        <button type="submit">Change Password</button>
      </form>
      {error ? <p>{error}</p>: <p>Password Updated succesfully</p>}
    </main>
  );
}
