import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/tickets">Tickets</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar