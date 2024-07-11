import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import broad from '../../src/assets/broad.svg';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 991 ? true : false);

  const toggleMenu = () => {
    setIsNavShowing(!isNavShowing);
  }

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);


  const closeNavHandler = () => {
    if (window.innerWidth < 991) {
      setIsNavShowing(false);
    } else {
      window.location.reload();
      setIsNavShowing(true);
    }
  }
  const [active, setActive] = useState('');

  return (
    <nav className={color ? 'nav nav-bg' : 'nav'}>
      <div className="container nav__container">
        <Link className="nav__logo" onClick={closeNavHandler}>
          <div className="logo_side">intract.</div>
        </Link>
        {isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link className={active === 'compass' ? 'active' : ''}
                onClick={() => setActive('compass')}>
                Compass
              </Link>
            </li>
            <li>
              <Link className={active === 'explore' ? 'active' : ''}
                onClick={() => setActive('explore')}>
                Explore
              </Link>
            </li>
            <li>
              <Link className={active === 'academy' ? 'active' : ''}
                onClick={() => setActive('academy')}>
                Academy
              </Link>
            </li>
            <li>
              <Link className={active === 'nfts' ? 'active' : ''}
                onClick={() => setActive('nfts')}>
                NFTs
              </Link>
            </li>
            <li>
              <Link to="" className={active === 'for projects' ? 'active' : ''}
                onClick={() => setActive('for projects')}>
                For Projects
              </Link>
            </li>
          </ul>
        )}
        <div className='search'>
          <span className='search_icon'>
            <CiSearch />
          </span>
          <input type="search" name="search" id="" placeholder='Search any ecosystem' />
        </div>
        <div className='feed_live'>
          <img src={broad} alt="" />
        </div>
        <div className='nav_sign'>
          <span className="navbar_button">Sign In</span>
        </div>


        <button
          className="nav__toggle-btn"
          onClick={toggleMenu}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Header
