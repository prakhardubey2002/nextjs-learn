import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="w-[80vw] mx-auto flex flex-col items-center justify-center">
            <h1>404 - Ticket Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Go back to the home page</Link>
        </div>
    )
}

export default NotFound