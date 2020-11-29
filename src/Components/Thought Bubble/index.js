import React from 'react';
import styles from './bubble.module.css';

const Bubble = ({ content }) => {
  return (
    <div className={styles.bubble}>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Bubble;
