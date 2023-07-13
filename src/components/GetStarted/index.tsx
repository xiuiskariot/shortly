import React from 'react';
import Button from '../Button';

import styles from './styles.module.scss';

const GetStarted: React.FC = () => {
  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <h2>Boost your links today</h2>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}

export default GetStarted;
