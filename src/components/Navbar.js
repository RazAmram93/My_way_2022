import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //Func for changing the X and menu icon
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //This func activates acording to the window's size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  //Listening to the window's size
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>--------</Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/mygames' className='nav-links' onClick={closeMobileMenu}> My Games </Link>
            </li>

            <li className='nav-item'>
              <Link to='/mybooks' className='nav-links' onClick={closeMobileMenu}> My Books </Link>
            </li>
            <li className='nav-item'>
              <Link to='/myprofile' className='nav-links' onClick={closeMobileMenu} > My Profile </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu} > Log-in </Link>
            </li>
            <li>
              <Link to='/home' className='nav-links-mobile' onClick={closeMobileMenu} > My way (c) </Link>
            </li>
          </ul>
          {button}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
