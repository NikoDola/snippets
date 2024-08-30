"use client";
import { useUser } from "@/context/userContext";
import { FormEvent, useState } from "react";

export default function ResetPassword() {
    const { resetPassword } = useUser();
    const [message, setMessage] = useState<string | null>(null);

    const resetPasswordHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        
        try {
            const reseting = await resetPassword(email);
            setMessage("We reset your password");
        } catch (error) {
            console.error(error);
            setMessage("Email not found");
        }
    };

    return (
        <main>
            <form onSubmit={resetPasswordHandler}>
                <input type="email" name="email" required />
                <button type="submit">Reset password</button>
            </form>
            {message && <p>{message}</p>}
        </main>
    );
}
