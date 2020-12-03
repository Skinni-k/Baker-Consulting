import React from 'react';
import Gmail from '../../Assets/gmail.svg';
import { Link } from 'react-scroll';
import whatsapp from '../../Assets/whatsapp.png';
import ReactWhatsapp from 'react-whatsapp';
import styles from './icons.module.css';

const GmailLogo = () => {
  return (
    <div className={styles.container}>
      <Link
        activeClass="removeBg"
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className={styles.email}>
          <img className={styles.emailIcon} src={Gmail} alt="gmail" />
        </div>
      </Link>
      <ReactWhatsapp number="+17807991439" className={styles.whatsapp}>
        <img src={whatsapp} className={styles.whatsappIcon} alt="whatsapp" />
      </ReactWhatsapp>
    </div>
  );
};

export default GmailLogo;
