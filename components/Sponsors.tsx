import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const brandNames = [
  "McCain", "Radisson Blu", "Red Bull", "Domino's", "Garnier", "RedTape",
  "Mirchi", "Paytm", "Microsoft", "Pepsi", "Burger King", "Lakme",
  "EaseMyTrip", "Mankind", "SMAAASH", "neou", "Cornitos", "unstop",
  "KRAFTON", "gaana", "secret temptation", "PULSE", "CAMPA",
  "Spotify", "CocaCola", "H&M", "Samsung", "OnePlus", "Uber",
  "Zomato", "Swiggy", "Myntra"
];

const sponsorImages = Array.from({ length: 23 }, (_, i) => `/sponsor/brand${i + 1}.jpg`);
const sponsors = sponsorImages.map((image, i) => ({
  id: i + 1,
  name: brandNames[i % brandNames.length],
  image,
}));

const Sponsors: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee Loop
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "linear",
      });
      
      // Dynamic Background Animation
      gsap.to(".bg-blob", {
        x: "random(-50, 50, 5)",
        y: "random(-50, 50, 5)",
        scale: "random(0.9, 1.2)",
        rotation: "random(-20, 20)",
        duration: "random(6, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sponsors"
      ref={containerRef}
      className="pt-24 pb-20 md:pt-32 md:pb-24 relative overflow-hidden bg-uphoria-purple text-white min-h-screen"
    >
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="bg-blob absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-uphoria-pink rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
         <div className="bg-blob absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-uphoria-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
         <div className="bg-blob absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] bg-uphoria-yellow rounded-full mix-blend-screen filter blur-[90px] opacity-30"></div>
      </div>

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-24 w-full overflow-hidden opacity-10 pointer-events-none -rotate-1">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap font-display font-black text-[6rem] md:text-[8rem] lg:text-[12rem] flex gap-12"
        >
          {Array(4)
            .fill("PARTNERS • COLLABS • SUPPORT • ")
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white text-black border-4 border-black px-6 py-2 transform -rotate-2 mb-6 shadow-[4px_4px_0px_#000]">
            <h2 className="font-hand font-bold text-lg md:text-2xl">
              The Backbone of Uphoria
            </h2>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase text-uphoria-yellow drop-shadow-[5px_5px_0px_#000] stroke-black">
            Our Sponsors
          </h2>
        </div>

        {/* BECOME A SPONSOR BUTTON */}
        <div className="text-center mb-16 relative z-20">
          <a
            className="inline-block relative group cursor-pointer"
            href="https://drive.google.com/file/d/1IbGg8wbjrIYsWJskaky29QoopZVB23yx/view?usp=sharin"
            target="_blank"
            rel="noreferrer"
          >
            <div className="absolute inset-0 bg-uphoria-cyan rounded-xl translate-x-2 translate-y-2 border-2 border-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <span className="relative bg-white text-black font-display font-black text-lg md:text-2xl px-8 md:px-10 py-3 md:py-4 rounded-xl border-4 border-black transition-all duration-300 inline-flex items-center gap-3 group-hover:-translate-y-1 hover:bg-black hover:text-white hover:border-white">
              <Handshake size={24} className="md:w-8 md:h-8 text-uphoria-pink group-hover:text-uphoria-cyan transition-colors" />
              <span>BECOME A SPONSOR</span>
              <ArrowRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        <div className="mb-20">
          <div className="sponsors-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto px-2">
            {sponsors.map((s) => (
              <div
                key={s.id}
                className="sponsor-item aspect-[3/2] w-full bg-white rounded-2xl border-4 border-black 
                           flex items-center justify-center p-4 md:p-6 
                           transition-all duration-300 
                           hover:scale-[1.03] hover:-translate-y-1 
                           hover:shadow-[8px_8px_0px_#FFD60A] 
                           cursor-pointer group overflow-hidden"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="max-w-[85%] md:max-w-[75%] max-h-[85%] md:max-h-[75%] object-contain  
                             transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
