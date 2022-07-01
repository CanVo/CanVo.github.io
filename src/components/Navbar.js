import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const[click, setClick] = useState(false)

  const [button, setButton] = useState(true)

  // Inverts the click variable from above on click.
  const handleClick = () => setClick(!click);

  // Function to close mobile menu
  const closeMobileMenu = () => setClick (false);

  // Function to remove and dispaly depending on screen size.
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };


  // Whenever screen is resized, we perform show button function.
  // Based on screen size, we display it or not.
  window.addEventListener('resize', showButton);



  return (
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/blog" className="navbar-logo" onClick={closeMobileMenu}>
              <i className="fa-solid fa-book-skull"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog/articles' className='nav-links' onClick={closeMobileMenu}>
                  Articles
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog/ctf-writeups' className='nav-links' onClick={closeMobileMenu}>
                  CTF Writeups
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog/misc' className='nav-links' onClick={closeMobileMenu}>
                  Misc
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog/resources' className='nav-links' onClick={closeMobileMenu}>
                  Resources
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog/credits' className='nav-links' onClick={closeMobileMenu}>
                  Credits
                </Link>
              </li>
            </ul>

          </div>
        </nav>
      </>
    </div>
  )
}

export default Navbar