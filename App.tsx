import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Accommodation from './components/Accomodation';
import Sponsors from './components/Sponsors';
import EventCategory from './components/EventCategory';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Lenis from 'lenis';
import gsap from 'gsap';


const ScrollHandler = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const lenis = (window as any).lenis as Lenis | undefined;

    const targetId = (state && (state as any).scrollTo) ? (state as any).scrollTo : "";

    if (!targetId) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (!element) return;

      if (lenis) {
        lenis.scrollTo(element, { offset: -100, immediate: false });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const onHomeReady = () => {
      const waitForStableLayout = () => {
        let lastHeight = 0;
        let stableFrames = 0;

        const check = () => {
          const currentHeight = document.body.scrollHeight;
          if (currentHeight === lastHeight) {
            stableFrames += 1;
          } else {
            stableFrames = 0;
            lastHeight = currentHeight;
          }

          if (stableFrames >= 3) {
            scrollToTarget();
            return;
          }

          requestAnimationFrame(check);
        };

        requestAnimationFrame(check);
      };

      waitForStableLayout();
      setTimeout(scrollToTarget, 500);
      setTimeout(scrollToTarget, 1200);
    };

    if ((window as any).__homeReady) {
      onHomeReady();
      return;
    }

    window.addEventListener("home-ready", onHomeReady, { once: true });
    return () => {
      window.removeEventListener("home-ready", onHomeReady);
    };
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
              <Route path="/accommodation" element={<Accommodation />} />
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
