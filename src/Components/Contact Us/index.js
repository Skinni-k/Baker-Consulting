import React, { useState } from 'react';
import Tostify from '../Tostify';
import styles from './contact.module.css';
import spinner from '../../Assets/spinner.gif';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  const [tostify, setTostify] = useState(false);
  const [tostifyContent, setTostifyContent] = useState({});

  const formSubmit = (e) => {
    e.preventDefault();
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
      setTostifyContent({
        color: '#25D366',
        text: 'Success!',
      });
      setTostify(true);
      setName('');
      setEmail('');
      setNumber('');
      setMessage('');
    }, 3000);
    setTimeout(() => {
      setTostify(false);
    }, 5000);
  };

  return (
    <section id="section4" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>Convinced To Work With Us?</p>
        <p className={styles.subTitle}>
          We have helped companies keep their promises to clients since 2005.
        </p>
        <form className={styles.form} onSubmit={formSubmit}>
          <div className={styles.details}>
            <input
              type="text"
              placeholder="Full Name*"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Enter 10-digit Number*"
              className={styles.input}
              pattern="[0-9]{10}"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.messageContainer}>
            <textarea
              placeholder="Message in brief*"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {disableButton ? (
            <img className={styles.spinner} src={spinner} alt="spinner" />
          ) : (
            <button
              className={styles.button}
              type="submit"
              disabled={disableButton}
            >
              Submit
            </button>
          )}
        </form>
      </div>
      {tostify === true ? (
        <Tostify
          tostifyContent={tostifyContent}
          color="#25D366"
          text="Success"
        />
      ) : null}
    </section>
  );
};

export default Contact;
