import { cookies } from 'next/headers';
import { db } from '@/firebase'; // Ensure correct path to your Firebase configuration
import { doc, getDoc } from 'firebase/firestore';
import Signout from '@/components/Signout';

export default async function HomePage() {
  const cookieStore = cookies();
  const userUid = cookieStore.get('user_id')?.value || 'Not logged in';

  if (userUid === 'Not logged in') {
    return (
      <div>
        <h1>Home Page</h1>
        <p>User ID: {userUid}</p>
        <Signout />
      </div>
    );
  }

  try {
    const docRef = doc(db, 'users', userUid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docData = docSnap.data();
      const userName = docData?.name || 'No name found';
      return (
        <div>
          <h1>Home Page</h1>
         
          <p>User Name: {userName}</p>
          <Signout />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Home Page</h1>
          <p>User ID: {userUid}</p>
          <p>No data found for this user.</p>
          <Signout />
        </div>
      );
    }
  } catch (error: any) {
    console.error('Error fetching document:', error.message);
    return (
      <div>
        <h1>Home Page</h1>
        <p>User ID: {userUid}</p>
        <p>Error fetching user data: {error.message}</p>
        <Signout />
      </div>
    );
  }
}
