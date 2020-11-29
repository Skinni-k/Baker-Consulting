import React from 'react';
import styles from './arrow.module.css';
import { Link } from 'react-scroll';

const Arrow = () => {
  return (
    <Link
      activeClass="active"
      to="section2"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <div className={styles.iconScroll} />
    </Link>
  );
};

export default Arrow;
