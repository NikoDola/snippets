"use client";

import { useUser } from '@/context/userContext';

export default function Home () {
  const { user, login } = useUser()

 
  return (
    <main>
      <p>Home Page</p>
      {user && <p>{`${user.email} is login`}</p>}
    </main>
  );
}
