import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  setLoading: (loading: boolean) => void;
}

const Loader: React.FC<LoaderProps> = ({ setLoading }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false)
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "power3.out"
    })
    .to(textRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.in"
    })
    .to(containerRef.current, {
      y: "-100%",
      duration: 1,
      ease: "expo.inOut"
    });
  }, [setLoading]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <h1 
        ref={textRef} 
        className="font-display text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-uphoria-pink via-uphoria-purple to-uphoria-yellow opacity-0 translate-y-10"
      >
        UPHORIA
      </h1>
    </div>
  );
};

export default Loader;