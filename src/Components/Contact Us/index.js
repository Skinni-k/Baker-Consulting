import React, { useState } from 'react';
import Tostify from '../Tostify';
import styles from './contact.module.css';
import spinner from '../../Assets/spinner.gif';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [disable, setDisable] = useState(false);
  const [tostify, setTostify] = useState(false);
  const [tostifyContent, setTostifyContent] = useState({});

  const formSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    fetch(
      'https://fpi150he05.execute-api.ca-central-1.amazonaws.com/dev/sendEmail',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message: `${message}
My mobile number is: ${number}`,
        }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          setTostifyContent({
            color: '#25D366',
            text: 'Success!',
          });
          setTostify(true);
          setTimeout(() => {
            setTostify(false);
          }, 3000);
        } else {
          throw 'Error. Request not sent';
        }
      })
      .catch((error) => {
        setTostify(true);
        setTostifyContent({
          color: 'red',
          text: 'Try Again',
        });
        setTimeout(() => {
          setTostify(false);
        }, 3000);
      })
      .finally(() => {
        setDisable(false);
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
      });
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
              disabled={disable}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disable}
              required
            />
            <input
              type="tel"
              placeholder="Enter 10-digit Number*"
              className={styles.input}
              pattern="[0-9]{10}"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              disabled={disable}
              required
            />
          </div>
          <div className={styles.messageContainer}>
            <textarea
              placeholder="Message in brief*"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={disable}
              required
            />
          </div>
          {disable ? (
            <img className={styles.spinner} src={spinner} alt="spinner" />
          ) : (
            <button className={styles.button} type="submit" disabled={disable}>
              Submit
            </button>
          )}
        </form>
      </div>
      {tostify === true ? <Tostify tostifyContent={tostifyContent} /> : null}
    </section>
  );
};

export default Contact;
