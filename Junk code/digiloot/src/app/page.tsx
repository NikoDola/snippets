import { cookies } from 'next/headers';
import Signout from '@/components/Signout';

export default async function HomePage() {
  // Get the cookies from the request headers
  const cookieStore = cookies();
  
  // Retrieve the user_id cookie
  const userUid = cookieStore.get('user_id')?.value;
console.log('ej wtf')
  return (
    <div>
      <h1>Home Page</h1>
      <p>User ID: {userUid || 'Not logged in'}</p>
      <Signout />
    </div>
  );
}
