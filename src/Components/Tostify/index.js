import React from 'react';
import styles from './tostify.module.css';

const Tostify = ({ tostifyContent }) => {
  return (
    <div
      style={{ backgroundColor: tostifyContent.color }}
      className={styles.tostify}
    >
      {tostifyContent.text}
    </div>
  );
};

export default Tostify;
