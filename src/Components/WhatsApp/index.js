import React from 'react';
import styles from './whatsapp.module.css';
import whatsapp from '../../Assets/whatsapp.png';
import ReactWhatsapp from 'react-whatsapp';

const WhatsApp = () => {
  return (
    <ReactWhatsapp number="+17807991439" className={styles.whatsapp}>
      <img src={whatsapp} className={styles.icon} alt="whatsapp" />
    </ReactWhatsapp>
  );
};

export default WhatsApp;
