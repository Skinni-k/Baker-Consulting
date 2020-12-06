import React from 'react';
import styles from './introduction.module.css';
import Arrow from '../Bottom Arrow';

const Introduction = () => {
  return (
    <section id="section1" className={styles.section}>
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <div className={styles.title}>baker consulting inc.</div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Arrow />
      </div>
    </section>
  );
};

export default Introduction;
