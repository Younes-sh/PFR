import Link from 'next/link'
import '../../styles/globals.css'




const Navbar = () => {
    
  return (
    <div className=''>
        <ul className=''>
            <li  className=' '>
                <Link rel="stylesheet" href="" >Home</Link>
            </li>
            <li className=' '>
                <Link rel="stylesheet" href="" >Contact</Link>
            </li>
            <li className=' '>
                <Link rel="stylesheet" href="" >Projects</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar