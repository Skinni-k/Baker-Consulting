import React from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

const ResponsiveNav = ({ menuHandle }) => {
  return (
    <div className={styles.responsiveNav}>
      <ul className={styles.responsiveNavItems}>
        <li className={styles.responsiveNavItem}>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={menuHandle}
          >
            Services
          </Link>
        </li>
        <li className={styles.responsiveNavItem}>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={menuHandle}
          >
            Testimonials
          </Link>
        </li>
        <li className={styles.responsiveNavItem}>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={menuHandle}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveNav;
