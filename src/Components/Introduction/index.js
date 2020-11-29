import React from 'react';
import styles from './introduction.module.css';
import Arrow from '../Bottom Arrow';

const Introduction = () => {
  return (
    <section id="section1" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>GROWING YOUR BUSINESS</p>
      </div>
      <Arrow />
    </section>
  );
};

export default Introduction;
