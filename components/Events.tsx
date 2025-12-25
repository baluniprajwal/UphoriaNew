import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MoveRight, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10); // Small buffer to avoid flickering at 0
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    // Center the scroll view initially
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const { scrollWidth, clientWidth } = scrollContainer;
      
      // Calculate center position
      const centerPos = (scrollWidth - clientWidth) / 2;
      
      // Temporarily disable smooth scroll to make initial positioning instant
      scrollContainer.style.scrollBehavior = 'auto';
      scrollContainer.scrollLeft = centerPos;
      scrollContainer.style.scrollBehavior = '';
    }

    const ctx = gsap.context(() => {
      // Title Parallax
      gsap.to(".section-title", {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Cards Entrance
      gsap.fromTo(".polaroid", 
        { y: 100, rotation: 5 },
        {
          y: 0,
          rotation: (i) => categories[i].rotate === 'rotate-2' ? 2 : -2, // Restore natural rotation
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: "top 85%", 
          }
        }
      );
      
      // Hint animation Right
      gsap.to(".scroll-hint-right", {
        x: 10,
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Hint animation Left
      gsap.to(".scroll-hint-left", {
        x: -10,
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
    }, containerRef);
    
    // Initial check and event listeners
    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (id: number) => {
    navigate(`/events/${id}`);
  };

  return (
    <section id="events" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-uphoria-yellow/10">
       {/* Decorative Background */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10" 
            style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
       </div>

      <div className="container mx-auto px-6 mb-12 relative z-10 text-center">
        <div className="section-title relative inline-block max-w-full">
          <div className="absolute -inset-4 bg-black transform rotate-3 rounded-lg z-0"></div>
          <h2 className="relative z-10 font-display text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white drop-shadow-md transform -rotate-2 break-words leading-none">
            EVENT CATEGORIES
          </h2>
        </div>
        <div className="mt-12 flex justify-center items-center gap-4">
          <p className="font-hand text-lg md:text-2xl text-black bg-white inline-block px-6 py-3 border-4 border-black rotate-1 hard-shadow hover:-rotate-1 transition-transform cursor-crosshair">
            Tap a card to view events 👉
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto pb-16 px-6 md:px-20 gap-8 md:gap-12 snap-x snap-mandatory scroll-smooth w-full hide-scrollbar"
        >
          {categories.map((event) => (
            <div 
              key={event.id} 
              onClick={() => handleCategoryClick(event.id)}
              className={`polaroid flex-shrink-0 w-[280px] md:w-[360px] snap-center group relative hover:z-50 transition-all duration-300 cursor-pointer pt-8`}
            >
              {/* Polaroid Frame */}
              <div className="bg-white p-4 pb-16 border-4 border-black hard-shadow transition-all duration-300 group-hover:scale-105 group-hover:-rotate-1">
                <div className="relative aspect-[4/5] border-2 border-black overflow-hidden mb-6 bg-gray-100">
                   <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute top-2 right-2 ${event.color} border-2 border-black px-2 py-1 font-bold text-xs uppercase tracking-widest hard-shadow`}>
                    {event.category}
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-0 w-full text-center px-4">
                  <h3 className="font-hand text-xl md:text-2xl font-bold text-black group-hover:text-uphoria-pink transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2 px-2 border-t-2 border-black/5 pt-2">
                    <p className="text-sm font-sans font-bold text-gray-500">View Events</p>
                    <ArrowUpRight size={20} className="text-black opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
                  </div>
                </div>
              </div>

              {/* Tape/Pin Graphic */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-uphoria-pink border-4 border-black shadow-sm z-20"></div>
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/50 z-30"></div>
            </div>
          ))}
          
          {/* Spacer for right padding */}
          <div className="min-w-[20px] md:min-w-[50px] flex-shrink-0"></div>
        </div>

        {/* Left Scroll Button */}
        <button 
           onClick={handleScrollLeft}
           className={`absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-[60] hidden md:block focus:outline-none group/btn cursor-pointer transition-all duration-300 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}
           aria-label="Scroll left"
        >
           <div className="scroll-hint-left bg-black text-white p-4 rounded-full border-2 border-white hard-shadow transition-transform active:scale-95 group-hover/btn:bg-uphoria-pink group-hover/btn:border-black">
              <MoveLeft size={32} />
           </div>
        </button>
        
        {/* Right Scroll Button */}
        <button 
           onClick={handleScrollRight}
           className={`absolute right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-[60] hidden md:block focus:outline-none group/btn cursor-pointer transition-all duration-300 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
           aria-label="Scroll right"
        >
           <div className="scroll-hint-right bg-black text-white p-4 rounded-full border-2 border-white hard-shadow transition-transform active:scale-95 group-hover/btn:bg-uphoria-pink group-hover/btn:border-black">
              <MoveRight size={32} />
           </div>
        </button>
      </div>
    </section>
  );
};

export default Events;