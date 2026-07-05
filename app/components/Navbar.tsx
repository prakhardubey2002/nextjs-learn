import Link from 'next/link'
import Logo from '@/assets/images/logo.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex w-[80vw] mx-auto justify-start items-center gap-4' >
                <Image src={Logo} alt="Dojo Help Desk" placeholder='blur' width={100} height={100} quality={100} />
                <li><Link href="/">Home</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/tickets">Tickets</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar