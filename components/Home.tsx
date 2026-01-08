import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Artists from './Artists';
import Events from './Events';
import Timeline from './Timeline';
import Gallery from './Gallery';

const Home: React.FC = () => {
  useEffect(() => {
    (window as any).__homeReady = true;
    window.dispatchEvent(new Event("home-ready"));

    return () => {
      (window as any).__homeReady = false;
    };
  }, []);

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
