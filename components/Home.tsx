import React from 'react';
import Hero from './Hero';
import About from './About';
import Artists from './Artists';
import Events from './Events';
import Timeline from './Timeline';
import Gallery from './Gallery';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Artists />
      <Gallery />
      <Events />
      <Timeline />
    </>
  );
};

export default Home;