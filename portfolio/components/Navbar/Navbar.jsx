import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='w-full h-16 bg-cyan-700'>
        <ul>
            <li>
                <Link rel="stylesheet" href="" >Home</Link>
            </li>
            <li>
                <Link rel="stylesheet" href="" >Contact</Link>
            </li>
            <li>
                <Link rel="stylesheet" href="" >Projects</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar