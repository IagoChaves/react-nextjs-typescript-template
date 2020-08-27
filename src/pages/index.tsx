import React from 'react';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';
import Logo from '../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Template</title>
      </Head>

      <Logo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure template</p>
    </Container>
  );
};

export default Home;
