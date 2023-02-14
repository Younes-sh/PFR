import Link from 'next/link'
import '../../styles/globals.css'




const Navbar = () => {
    
  return (
    <div className=''>
        <ul className='w-2/3 h-full flex '>
            <li  className=' m-4'>
                <Link  href="/" >Home</Link>
            </li>
            <li className=' m-4'>
                <Link  href="/contact" >Contact</Link>
            </li>
            <li className=' m-4'>
                <Link  href="/projects" >Projects</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar