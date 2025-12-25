import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotating Background Elements on Scroll
      gsap.to(".bg-scribble", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Parallax Cards - Middle card moves differently
      gsap.fromTo(".card-left", 
        { y: 100 },
        { y: -50, scrollTrigger: { trigger: ".cards-container", start: "top bottom", end: "bottom top", scrub: 1 } }
      );
      
      gsap.fromTo(".card-center", 
        { y: 200 },
        { y: -100, scrollTrigger: { trigger: ".cards-container", start: "top bottom", end: "bottom top", scrub: 1.5 } }
      );
      
      gsap.fromTo(".card-right", 
        { y: 100 },
        { y: -50, scrollTrigger: { trigger: ".cards-container", start: "top bottom", end: "bottom top", scrub: 1 } }
      );

      // Text Highlight Animation
      gsap.to(".highlight-underline", {
        backgroundSize: "100% 100%",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1
        }
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Background scribbles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="bg-scribble absolute top-10 left-[-100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] opacity-30 text-uphoria-pink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10 Q80 10 80 40 T50 70 T20 40 T50 10Z" />
          <path d="M50 20 Q70 20 70 40 T50 60 T30 40 T50 20Z" />
        </svg>
        <svg className="bg-scribble absolute bottom-10 right-[-50px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] opacity-30 text-uphoria-yellow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" style={{transformOrigin: 'center'}}>
          <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="30" />
          <path d="M10 50 L90 50 M50 10 L50 90" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-32 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-black text-white px-4 md:px-6 py-2 font-hand text-lg md:text-xl -rotate-2 mb-6 md:mb-8 border-2 border-transparent hover:border-uphoria-pink hover:text-uphoria-pink transition-colors">
            WHAT IS THIS??
          </div>
          <div ref={textRef} className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 drop-shadow-sm">
            Experience a <span className="highlight-underline bg-gradient-to-r from-uphoria-cyan to-uphoria-cyan bg-no-repeat bg-[length:0%_100%] transition-all px-2 text-black">kaleidoscope</span> of emotions, music, and art. Uphoria is a <span className="bg-uphoria-yellow px-2 border-2 border-black inline-block transform rotate-2 hard-shadow">heartbeat</span> shared by thousands.
          </div>
        </div>

        <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-16 px-4">
          {[
            { title: "Vibrant Energy", desc: "Three days of non-stop electricity, neon lights, and pure passion.", color: "bg-pink-200", rotate: "-rotate-2", className: "card-left" },
            { title: "Universal Love", desc: "A theme that celebrates connection, inclusivity, and the love for creativity.", color: "bg-cyan-200", rotate: "rotate-3", className: "card-center" },
            { title: "Creative Chaos", desc: "Where art meets technology in a beautiful explosion of innovation.", color: "bg-yellow-200", rotate: "-rotate-1", className: "card-right" }
          ].map((item, idx) => (
            <div key={idx} className={`about-card ${item.className} ${item.rotate} transform hover:z-20`}>
              {/* Tape Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm transform rotate-1 z-10 flex items-center justify-center font-hand text-[10px] text-gray-400">
                WASHI TAPE
              </div>
              
              <div className={`${item.color} h-full p-6 md:p-8 border-4 border-black hard-shadow flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:-rotate-0`}>
                <h3 className="font-display text-2xl md:text-3xl font-black mb-4 text-black uppercase">{item.title}</h3>
                <p className="font-hand text-lg md:text-xl text-slate-900 leading-relaxed font-bold">{item.desc}</p>
                <div className="mt-8 flex justify-between items-end">
                   <div className="text-sm font-sans font-bold uppercase tracking-widest border border-black px-2 rounded-full">
                     0{idx+1}
                   </div>
                   <div className="text-4xl md:text-5xl transform hover:scale-125 transition-transform duration-300 cursor-pointer">
                    {idx === 0 ? '⚡' : idx === 1 ? '💖' : '🎨'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;