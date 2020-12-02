import React from 'react';
import styles from './arrow.module.css';
import { Link } from 'react-scroll';

const Arrow = () => {
  return (
    <Link
      activeClass="removeBg"
      to="section2"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {/* <div className={styles.iconScroll} /> */}
      <div className={styles.chevron} />
      <div className={styles.chevron} />
      <div className={styles.chevron} />
    </Link>
  );
};

export default Arrow;
