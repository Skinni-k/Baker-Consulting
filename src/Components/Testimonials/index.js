import React from 'react';
import styles from './testimonials.module.css';
import Bubble from '../Thought Bubble';
import user from '../../Assets/user.png';

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      img: user,
      content: 'Very responsive, great work. Will definitely work with again!',
      from: 'SHALOM GEORGE',
      position: 'CO-FOUNDER',
      organization: "I DON'T KNOW",
    },
    {
      id: 2,
      img: user,
      content:
        'Did a great job communicating with us and helping us wade through the issues. We would recommend him to others and will use him again if needed.',
      from: 'ELVIS ROZARIO',
      position: 'FOUNDER',
      organization: 'BOMB STUDIO',
    },
    {
      id: 3,
      img: user,
      content:
        'Very good experience. Easy to work with - delivered as promised with regard to quality of work and timeliness. Did not need a ton of instruction to put a useful report together.',
      from: 'KEVIN DEWINTER',
      position: 'CEO',
      organization: 'FORM-MATION',
    },
  ];
  return (
    <section className={styles.section} id="section3">
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.scroll}>
        {testimonies.map((testimony) => {
          return (
            <div className={styles.bubbleContainer} key={testimony.id}>
              <Bubble content={testimony.content} />
              <div className={styles.reviewFromContainer}>
                <img src={testimony.img} alt="user" className={styles.img} />
                <div style={{ marginLeft: '1rem' }}>
                  <h2>{testimony.from}</h2>
                  <p>
                    {testimony.position}, {testimony.organization}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
