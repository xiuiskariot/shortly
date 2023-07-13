import React from 'react';


import Input from '../Input';

import styles from './styles.module.scss';

const ShortenContainer: React.FC = () => {
  return (
    <div className={styles.container}>
        <Input
          name="shortenURL"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button type="submit">Shorten it!</button>
    </div>
  );
}

export default ShortenContainer;
