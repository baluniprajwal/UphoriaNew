import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Heart, Calendar, MapPin, Ticket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mouse Parallax for Main Text & Elements
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xNormalized = (clientX / window.innerWidth - 0.5);
        const yNormalized = (clientY / window.innerHeight - 0.5);
        
        // Text tilts 3D
        gsap.to(textRef.current, {
          rotationY: xNormalized * 15,
          rotationX: -yNormalized * 15,
          ease: "power2.out",
          duration: 1
        });

        // Floating icons move
        gsap.to(".floating-icon", {
            x: (i) => xNormalized * (i + 1) * 40,
            y: (i) => yNormalized * (i + 1) * 40,
            duration: 1.5,
            ease: "power2.out"
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);

      // Entrance Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-bg-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power3.out"
      })
      .from(".hero-main-text", {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "elastic.out(1, 0.6)"
      }, "-=1")
      .from(".hero-badge", {
        y: 30,
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5")
      .from(".cta-button", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
      .from(".floating-icon", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      }, "-=1");

      // Continuous Floating Animation
      gsap.to(".floating-icon", {
        y: "random(-15, 15)",
        rotation: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });

      return () => window.removeEventListener('mousemove', handleMouseMove);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#FFF0F5] perspective-[1000px]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Background Moving Text (Ambient) */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03] select-none overflow-hidden z-0">
         {[...Array(6)].map((_, i) => (
             <div key={i} className="hero-bg-text whitespace-nowrap font-display font-black text-8xl md:text-9xl uppercase leading-none transform -rotate-[15deg] scale-125 origin-center text-black">
                 LOVE • MUSIC • ART • CHAOS • UPHORIA • 
             </div>
         ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
          {/* Hearts */}
          <Heart className="floating-icon absolute top-[15%] left-[10%] text-uphoria-pink w-16 h-16 md:w-24 md:h-24 drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)]" fill="#FF007F" strokeWidth={1.5} />
          <Heart className="floating-icon absolute bottom-[25%] right-[5%] text-uphoria-purple w-12 h-12 md:w-20 md:h-20 drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)]" fill="#7B2CBF" strokeWidth={1.5} />
          
          {/* Sparkles/Stars */}
          <Sparkles className="floating-icon absolute top-[20%] right-[15%] text-uphoria-yellow w-12 h-12 md:w-16 md:h-16" fill="#FFD60A" stroke="black" strokeWidth={1} />
          <div className="floating-icon absolute bottom-[15%] left-[15%] text-6xl rotate-12 drop-shadow-md">🍄</div>
          <div className="floating-icon absolute top-[30%] left-[25%] w-6 h-6 rounded-full bg-uphoria-cyan border-2 border-black"></div>
          
          {/* Abstract Shapes */}
          <div className="floating-icon absolute top-[10%] right-[30%] w-32 h-32 border-4 border-black/5 rounded-full z-0"></div>
          <div className="floating-icon absolute bottom-[10%] left-[30%] w-40 h-40 border-4 border-uphoria-pink/10 rounded-full z-0"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center w-full max-w-7xl">
        
        {/* Huge Title Container */}
        <div className="relative perspective-[1000px] py-4">
           {/* Main Text */}
           <h1 ref={textRef} className="hero-main-text font-display text-[14vw] md:text-[12rem] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-uphoria-pink via-uphoria-purple to-uphoria-cyan drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] select-none hover:scale-105 transition-transform duration-500">
             UPHORIA
           </h1>
           
           {/* Decorative Elements on Text */}
           <div className="absolute -top-6 -right-6 md:top-0 md:right-10 hero-badge">
               <div className="bg-uphoria-yellow text-black font-hand font-bold text-xl md:text-3xl px-4 py-2 border-2 border-black rotate-12 hard-shadow">
                   2026
               </div>
           </div>
        </div>

        {/* Subtitle */}
        <div className="hero-badge mt-6 md:mt-10 relative inline-block max-w-2xl">
            <h2 className="font-hand text-3xl md:text-5xl font-bold text-black leading-snug">
               Where Some Stories Write{" "}
               <span className="relative inline-block text-white">
                   <span className="absolute inset-0 bg-black transform -rotate-2 scale-110 -z-10 rounded-sm"></span>
                   <span className="relative z-10 px-2">Themselves</span>
               </span>
            </h2>
        </div>

      </div>

      {/* Bottom arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
         <div className="bg-white p-2 rounded-full border-2 border-black shadow-md">
            <ArrowRight size={24} className="transform rotate-90" />
         </div>
      </div>

    </section>
  );
};

export default Hero;
