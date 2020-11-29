import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './navbar.module.css';
import menu from '../../Assets/menu.png';
import x from '../../Assets/x.svg';
import ResponsiveNav from './ResponsiveNav';

const Navbar = () => {
  const [cross, setCross] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const scrollToHome = () => {
    scroll.scrollToTop();
  };

  const menuHandle = () => {
    setShowMenu(!showMenu);
    setCross(!cross);
  };

  return (
    <nav className={styles.nav} id="navbar">
      <div className={styles.navContent}>
        <h2 className={styles.navLogo} onClick={scrollToHome}>
          {' '}
          BAKER CONSULTING INC.
        </h2>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact us
            </Link>
          </li>
        </ul>
        <img
          alt="menu"
          src={cross ? x : menu}
          className={styles.navAction}
          onClick={menuHandle}
        />
      </div>
      {showMenu ? <ResponsiveNav menuHandle={menuHandle} /> : null}
    </nav>
  );
};

export default Navbar;
