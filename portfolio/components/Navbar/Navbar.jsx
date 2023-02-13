import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div className='w-full h-16 bg-cyan-700 flex justify-center items-center'>
        <ul className='w-2/3 h-full flex bg-red-200'>
            <li className=' m-4'>
                <Link rel="stylesheet" href="" >Home</Link>
            </li>
            <li className=' m-4'>
                <Link rel="stylesheet" href="" >Contact</Link>
            </li>
            <li className=' m-4'>
                <Link rel="stylesheet" href="" >Projects</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar