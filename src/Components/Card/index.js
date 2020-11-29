import React from 'react';
import styles from './card.module.css';

const Card = ({ img, title, content, setIsOpen, setModalContent }) => {
  const onCardClickHandle = () => {
    setIsOpen(true);
    setModalContent({
      title,
      content,
      img,
    });
  };

  return (
    <div className={styles.card} onClick={onCardClickHandle}>
      <img className={styles.image} src={img} alt="" />
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles.readMore}>Read More</div>
    </div>
  );
};

export default Card;
