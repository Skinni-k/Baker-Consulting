import React from 'react';
import styles from './tostify.module.css';

const Tostify = ({ color, text }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.tostify}>
      {text}
    </div>
  );
};

export default Tostify;
