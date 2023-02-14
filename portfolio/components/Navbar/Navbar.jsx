import Link from 'next/link'
import ImageIcon from '../../assets/logo.png';
function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div>
            <Link href="/">
              <img src={ImageIcon} alt="" />
            </Link>
            <div className="container-menu">
            
                <div className='menu-list'>
                    <ul>
                        <li>
                            <Link className='Link' href="/">Home</Link>
                        </li>
                        <li>
                            <Link className='Link' href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className='Link' href="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>

                <div className='menu-languge'>
                    <h1>Languge</h1>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;