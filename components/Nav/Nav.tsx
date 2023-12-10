import Image from 'next/image'
import logo from '../../public/logo.svg'
import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav className='flex gap-10 justify-between'>
        <Link href="/" className='flex'>
            <Image src={logo} alt='logo'/>
          <h2 className='flex-none'>Diego Segura</h2>
        </Link>

        <div className='flex gap-8'>
          <Link href="/Works" className='flex-1'>Works</Link>
          <Link href="/Docs" className='flex-1'>Docs</Link>
          <Link href="/About" className='flex-1'>About</Link>
        </div>
        
        <div>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width={40} height={40} alt='Theme'/>
        </div>
      </nav>
    </>
  );
}
