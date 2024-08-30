"use client"
import { useUser } from '@/context/userContext';


export default function Verification() {
  const { userVerify } = useUser();

  return (
    <main className='flex flex-col item-center'>
      <h1>We send you a verification Link</h1>
      <h3>If you do not see an email on your inbox please check the spam folder.</h3>
    </main>
  );
}