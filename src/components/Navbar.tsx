'use client';
import React,{useState} from 'react'
import Link from 'next/link'
import Navitem from './Navitem';


const Navbar = () => {
    const [menu,setMenu] = useState(false);
  return (
    <div>
      <nav>
        <div>
            <div className='flex items-top justify-between'>
                <Link href="/">Logo</Link>
            </div>
            <Navitem></Navitem>
        </div>
      </nav>
    </div>
  )
}

export default Navbar