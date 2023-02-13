import {useRef} from 'react'
import Link from 'next/link'
import '../../styles/globals.css'




const Navbar = () => {
    
  return (
    <div className='w-full h-16 bg-cyan-700 flex justify-center items-center'>
        <ul className='w-2/3 h-full flex '>
            <li  className=' m-4'>
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