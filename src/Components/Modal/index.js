import React from 'react';
import Modal from 'react-modal';
import styles from './modal.module.css';

Modal.setAppElement('#root');

const ServiceInDetail = ({ isOpen, setIsOpen, modalContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: 'grey',
        },
        content: {
          top: '150px',
          bottom: '100px',
          borderRadius: '10px',
        },
      }}
    >
      <span className={styles.close} onClick={() => setIsOpen(false)}>
        X
      </span>
      <img
        src={modalContent.img}
        className={styles.img}
        alt={`Modal ${modalContent.img}`}
      />
      <h2 className={styles.title}>{modalContent.title}</h2>
      <p className={styles.content}>{modalContent.content}</p>
    </Modal>
  );
};

export default ServiceInDetail;
