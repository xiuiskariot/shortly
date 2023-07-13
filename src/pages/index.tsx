import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';


import api from '../services/api';
import getValidationErros from '../utils/getValidationErrors';

import Button from '../components/Button';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import ShortenContainer from '../components/ShortenContainer';

import styles from '../styles/sass/Home.module.scss';

interface BothURL {
  url: string;
  shortenedUrl: string;
}

interface HomeProps {
  cookies: string;
}

const Home: React.FC<HomeProps> = () => {
  const formRef = useRef<FormHandles>(null);
  const [URLsRepository, setURLsRepository] = useState<BothURL[]>(() => {
    if (typeof window !== 'undefined') {
      const repository = localStorage.getItem('@URLShortener');

      if(repository) {
        const parsedRepository = JSON.parse(repository);

        return parsedRepository;
      }

    return [] as BothURL[];

    }

    return [] as BothURL[];
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('@URLShortener', JSON.stringify(URLsRepository))
    }
  }, [URLsRepository])

  const handleSubmit = useCallback(async data => {
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        shortenURL: Yup.string()
          .url()
          .required('E-mail obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const shortenUrl = String(formRef.current.getFieldValue("shortenURL"));

      const response = await api.post(`/shorten?url=${shortenUrl}`);

      const bothUrls = {
        url: shortenUrl,
        shortenedUrl: String(response.data.result.short_link),
      }

      setURLsRepository([...URLsRepository, bothUrls]);
    } catch(err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err)

        formRef.current?.setErrors(errors);
      }
    }
  },[]);


  return (
    <>
      <section className={styles.intro}>
        <Header />
        <div>
          <div className={styles.texts}>
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.shortener}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <ShortenContainer />
          </Form>
        </div>

        <div className={styles.resultsContainer}>
          {URLsRepository.map((url, index) => (
            <div className={styles.urlContainer} key={index}>
              <p>{url.url}</p>
              <span>{url.shortenedUrl}</span>
              <button onClick={() => navigator.clipboard.writeText(url.shortenedUrl)}><span>Copy</span>  </button>
            </div>
          ))}
        </div>


        <div className={styles.details}>
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <div className={styles.cards}>
            <Cards />
          </div>
        </div>

      </section>
      <GetStarted />
      <Footer />
    </>
  )

}

export default Home;


