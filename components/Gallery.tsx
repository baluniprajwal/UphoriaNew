import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Heart, Sparkles, Sticker, Zap, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const captions = [
  "Crowd goes wild!!",
  "Vibez only!",
  "Front row feels",
  "Light show",
  "Backstage chaos",
  "Core memory <3",
  "Best night ever",
  "Neon skyline",
  "Hands in the air",
  "Midnight pulse",
  "Stage flames",
  "Bass drop",
  "Afterglow",
  "City lights",
  "Electric haze",
  "Golden hour",
  "Confetti storm",
  "Finale roar",
];
const rotations = ["rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1", "-rotate-3"];
const tapes = ["bg-uphoria-pink", "bg-uphoria-cyan", "bg-uphoria-yellow"];
const galleryItems = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/upho${i + 1}.jpg`,
  caption: captions[i % captions.length],
  rotate: rotations[i % rotations.length],
  tape: tapes[i % tapes.length],
}));


const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Scroll-Linked Horizontal Movement
      // As user scrolls down, Row 1 moves left, Row 2 moves right
      
      gsap.set([row1Ref.current, row2Ref.current], { willChange: "transform" });

      gsap.to(row1Ref.current, {
        xPercent: -20, // Move Left
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      });

      gsap.to(row2Ref.current, {
        xPercent: 20, // Move Right
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      });

      // 2. Floating Sticker Animation
      gsap.to(".gallery-sticker", {
        y: "random(-50, 50)",
        rotation: "random(-20, 20)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="gallery" 
      ref={containerRef} 
      className="py-16 md:py-32 relative overflow-hidden bg-[#0a0a0a] text-white perspective-[1000px]"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }}>
      </div>
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-uphoria-purple rounded-full blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-uphoria-pink rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-16 relative z-10 text-center">
        <div className="inline-block relative">
            <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-[4px_4px_0px_#FF007F]">
              CAPTURED
            </h2>
            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-uphoria-yellow animate-spin-slow">
                <Star size={40} className="md:w-[60px] md:h-[60px]" fill="#FFD60A" />
            </div>
        </div>
        <h2 className="font-hand text-3xl md:text-5xl lg:text-6xl font-bold text-uphoria-cyan -mt-2 md:-mt-4 transform -rotate-2">
           Moments & Chaos
        </h2>
      </div>

      {/* Gallery Container */}
      <div className="flex flex-col gap-8 md:gap-16 relative z-10">
        
        {/* Row 1 */}
        <div className="flex w-[200%] gap-4 sm:gap-6 md:gap-12 will-change-transform" ref={row1Ref}>
          {[...galleryItems, ...galleryItems].map((item, i) => (
            <GalleryItem key={`r1-${i}`} item={item} index={i} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-[200%] gap-4 sm:gap-6 md:gap-12 -ml-[100%] will-change-transform" ref={row2Ref}>
          {[...galleryItems, ...galleryItems].reverse().map((item, i) => (
            <GalleryItem key={`r2-${i}`} item={item} index={i} />
          ))}
        </div>

      </div>

      {/* Floating Stickers Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="gallery-sticker absolute top-[20%] left-[5%] text-uphoria-yellow">
              <Zap size={32} className="md:w-[48px] md:h-[48px] drop-shadow-lg" fill="#FFD60A" />
          </div>
          <div className="gallery-sticker absolute bottom-[30%] right-[5%] text-uphoria-pink">
              <Heart size={40} className="md:w-[56px] md:h-[56px] drop-shadow-lg" fill="#FF007F" />
          </div>
          <div className="gallery-sticker absolute top-[40%] right-[15%] text-uphoria-cyan">
              <Sparkles size={28} className="md:w-[40px] md:h-[40px] drop-shadow-lg" />
          </div>
           <div className="gallery-sticker absolute bottom-[10%] left-[10%]">
              <div className="bg-white text-black font-bold p-2 rotate-12 text-[10px] md:text-xs border border-black shadow-md">
                  TOP RATED
              </div>
          </div>
      </div>
    </section>
  );
};

// Sub-component for individual items
const GalleryItem: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <div className={`
            relative w-[180px] sm:w-[220px] md:w-[350px] shrink-0 bg-white p-3 pb-10 sm:pb-12 
            border-4 border-white shadow-xl 
            transform ${item.rotate} hover:rotate-0 hover:scale-105 hover:z-50 
            transition-transform duration-300 group cursor-none
        `}>
            {/* Washi Tape */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 ${item.tape} opacity-80 rotate-1 shadow-sm z-20`}></div>
            
            {/* Image */}
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 border border-gray-100 relative transition-all duration-500">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors"></div>
                <img 
                    src={`${item.src}?random=${index}`} 
                    alt="Gallery" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                />
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-2 left-0 w-full text-center">
                <p className="font-hand text-black text-sm sm:text-base md:text-xl font-bold flex items-center justify-center gap-2">
                    {item.caption}
                    {index % 3 === 0 && <span className="text-uphoria-pink">♥</span>}
                </p>
                <div className="text-[10px] font-sans text-gray-400 uppercase tracking-widest mt-1">
                    Uphoria '25
                </div>
            </div>

            {/* Corner Doodle (Random) */}
            {index % 4 === 0 && (
                 <div className="absolute -bottom-4 -right-4 text-uphoria-cyan transform -rotate-12 z-30 drop-shadow-md">
                     <Sticker size={32} className="md:w-[40px] md:h-[40px]" />
                 </div>
            )}
             {index % 4 === 2 && (
                 <div className="absolute -top-4 -left-4 text-uphoria-yellow transform -rotate-12 z-30 drop-shadow-md">
                     <Camera size={32} className="md:w-[40px] md:h-[40px] text-black" fill="#FFD60A" />
                 </div>
            )}
        </div>
    );
}

export default Gallery;
