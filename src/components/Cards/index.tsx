import React from 'react';

import styles from './styles.module.scss';

const Cards: React.FC = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.bar}></div>
      <div className={styles.card}>
        <div className={styles.badge}>
          <img src="/icon-brand-recognition.svg" alt="statistics" />
        </div>
        <div className={styles.content}>
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.badge}>
          <img src="/icon-detailed-records.svg" alt="pointer" />
        </div>
        <div className={styles.content}>
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.badge}>
          <img src="/icon-fully-customizable.svg" alt="pallet" />
        </div>
        <div className={styles.content}>
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </div>
  );
}


export default Cards;
