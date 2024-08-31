"use client"
import { useUser } from "@/context/userContext"
import Link from 'next/link'

export default function NavBar(){

    const {user, logout} = useUser()
    if(user){
        console.log('user is login')
    }else{
        console.log('user is not login')
    }
    return(
        <main>
            <ul className="flex gap-2 justify-center">
                <li><Link href={'/'}>Home </Link></li>
                <li><Link href={'/profile'}>Profile </Link></li>
                <li onClick={user && logout}><Link href={user ? '#' : '/login'}>{user ? 'Logout': 'Login'}</Link></li>
                
            </ul>
        </main>
    )
}