"use client"


import { useUser } from '@/context';
import { sign } from 'crypto';

export default function SignOut() {
  const {signIn, logOut, user} = useUser()

  return (
    <div>
      {user ? <button onClick={logOut}>LogOut</button> : <button onClick={signIn}>Login</button>}
    </div>
  );
}
