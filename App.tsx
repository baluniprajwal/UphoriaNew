import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sponsors from './components/Sponsors';
import EventCategory from './components/EventCategory';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Lenis from 'lenis';
import gsap from 'gsap';

// Handles scrolling when navigating between pages or to anchors
const ScrollHandler = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const lenis = (window as any).lenis as Lenis | undefined;

    // Scroll to top on route change unless we have a specific target
    if (!state || !(state as any).scrollTo) {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
    }

    // Handle scroll to section if state is passed (from Navbar)
    if (state && (state as any).scrollTo) {
        const id = (state as any).scrollTo;
        // Small timeout to ensure DOM is rendered
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                if (lenis) {
                  lenis.scrollTo(element, { offset: 0 });
                } else {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 100);
    }
  }, [pathname, state]);

  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
      if ((window as any).lenis === lenis) {
        delete (window as any).lenis;
      }
    };
  }, []);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = 'unset';
      lenisRef.current?.start();
    }
  }, [loading]);

  return (
    <div className="bg-[#FFF0F5] min-h-screen text-black font-sans selection:bg-uphoria-yellow selection:text-black">
      {loading && <Loader setLoading={setLoading} />}
      
      {!loading && (
        <BrowserRouter>
          <ScrollHandler />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/events/:id" element={<EventCategory />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
