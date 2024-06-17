"use client"
import "./Nav.scss"
import Link from 'next/link'

export default function Nav() {

    return (
        <nav>
            <ul>
                <Link href={'/snippets'}><li>All Snippets</li></Link>
                <Link href={'/snippets/add'}><li>Add New</li></Link>
            </ul>
        </nav>
    )
}
