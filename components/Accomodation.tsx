import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, BedDouble, Calendar, Tent, Star, ShieldCheck, Ticket, Sparkles, Heart } from 'lucide-react';
import gsap from 'gsap';

const accommodationData = [
  {
    id: 1,
    headerText: "DAY 01",
    subHeader: "FEB 14",
    title: "AC Accommodation",
    description: "We have AC Accommodation facility in best of class hostel rooms, along with buffet meals.",
    link: "https://unstop.com/p/accomodation-day-1-uphoria-2025-bennett-university-bu-greater-noida-1369745",
    color: "bg-uphoria-pink",
    rotate: "md:rotate-2",
    icon: <BedDouble size={40} />,
    features: ["AC Rooms", "Buffet Meals", "24/7 Support"],
    badge: "SELLING FAST"
  },
  {
    id: 2,
    headerText: "DAY 02",
    subHeader: "FEB 15",
    title: "AC Accommodation",
    description: "We have AC Accommodation facility in best of class hostel rooms, along with buffet meals.",
    link: "https://unstop.com/p/accommodation-day-2-uphoria-2025-bennett-university-bu-greater-noida-1369767",
    color: "bg-uphoria-cyan",
    rotate: "md:-rotate-2",
    icon: <BedDouble size={40} />,
    features: ["AC Rooms", "Buffet Meals", "24/7 Support"],
    badge: "AVAILABLE"
  },
  {
    id: 3,
    headerText: "DAY 03",
    subHeader: "FEB 16",
    title: "AC Accommodation",
    description: "We have AC Accommodation facility in best of class hostel rooms, along with buffet meals.",
    link: "https://unstop.com/p/accommodation-day-3-uphoria-2025-bennett-university-bu-greater-noida-1369772",
    color: "bg-uphoria-yellow",
    rotate: "md:rotate-1",
    icon: <BedDouble size={40} />,
    features: ["AC Rooms", "Buffet Meals", "24/7 Support"],
    badge: "LIMITED"
  }
];

const Accommodation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
        
        gsap.from(".accom-header-element", {
             y: -50,
             opacity: 0,
             duration: 1,
             stagger: 0.2,
             ease: "power3.out"
        });

        gsap.from(".accom-ticket", {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.5)",
            delay: 0.3,
            onComplete: () => {
                
                gsap.set(".accom-ticket", { clearProps: "all" });
            }
        });
        gsap.to(".bg-blob", {
            x: "random(-50, 50)",
            y: "random(-50, 50)",
            scale: "random(0.9, 1.2)",
            duration: "random(6, 10)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: { amount: 2, from: "random" }
        });


    }, containerRef);

    return () => ctx.revert();
  }, []);

  const PAGE_BG = "#1F3B7A"; 

  return (
    <div ref={containerRef} className="min-h-screen pt-24 md:pt-32 pb-32 md:pb-40 relative overflow-hidden flex flex-col items-center" style={{ backgroundColor: PAGE_BG }}>
        
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/25"></div>
             <div className="bg-blob absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-uphoria-pink rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
             <div className="bg-blob absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-uphoria-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
             <div className="bg-blob absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] bg-uphoria-yellow rounded-full mix-blend-screen filter blur-[90px] opacity-20"></div>
             
             
             <div className="absolute inset-0 opacity-10" 
                style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 2px, transparent 2px)', backgroundSize: '30px 30px'}}>
             </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
            
            <div className="text-center mb-12 md:mb-20 max-w-4xl flex flex-col items-center relative">
                <div className="accom-header-element absolute -top-6 md:-top-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/10 blur-2xl"></div>
                <div className="accom-header-element inline-block bg-white text-black border-2 border-black px-6 py-2 transform -rotate-2 mb-8 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                    <h2 className="font-hand font-bold text-lg md:text-xl flex items-center gap-2 uppercase tracking-wider">
                         <Ticket size={20} /> Festival Stays
                    </h2>
                </div>
                <h1 className="accom-header-element font-display text-[clamp(1rem,5vw,2.6rem)] md:text-[clamp(2.1rem,4.8vw,5rem)] lg:text-[clamp(2.6rem,4.8vw,6rem)] font-black uppercase text-white drop-shadow-[2px_2px_0px_#000000] tracking-tight leading-none mb-3 text-center px-3 whitespace-nowrap">
                    Accommodation
                </h1>
                <div className="accom-header-element w-16 md:w-20 h-1 bg-uphoria-yellow rounded-full mb-4"></div>
                <p className="accom-header-element text-sm sm:text-base md:text-2xl font-sans text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed px-2">
                    Don't miss a beat. Stay right where the magic happens.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl px-4 md:px-0">
                {accommodationData.map((item) => (
                    <a 
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`accom-ticket group relative block ${item.rotate} hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-50`}
                    >
                        
                        <div className="absolute -top-3 -right-3 z-30 bg-black text-white px-3 py-1 font-display font-bold text-xs border-2 border-white shadow-md transform rotate-12 group-hover:rotate-0 transition-transform">
                            {item.badge}
                        </div>

                        
                        <div className="h-full flex flex-col relative drop-shadow-[10px_10px_0px_rgba(0,0,0,0.5)]">
                            
                            {/* Top Section (Colored) */}
                            <div className={`${item.color} p-6 border-4 border-black border-b-0 rounded-t-xl relative flex flex-col items-center text-center overflow-hidden min-h-[160px] justify-center`}>
                                
                                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>
                                
                                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                    <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-white mb-3 mx-auto shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h2 className="font-display text-4xl font-black uppercase tracking-tight text-black leading-none">{item.headerText}</h2>
                                    <div className="font-bold font-sans text-xs uppercase tracking-widest mt-1 opacity-80">{item.subHeader}</div>
                                </div>
                            </div>

                            <div className="relative h-6 bg-white border-x-4 border-black flex items-center overflow-hidden z-20">
                                
                                <div className="w-full border-t-4 border-dashed border-gray-300 my-auto"></div>
                                
                                <div className="absolute -left-4 w-8 h-8 rounded-full border-r-4 border-black" style={{ backgroundColor: PAGE_BG }}></div>

                                <div className="absolute -right-4 w-8 h-8 rounded-full border-l-4 border-black" style={{ backgroundColor: PAGE_BG }}></div>
                            </div>

                            <div className="p-6 pt-2 bg-white border-4 border-black border-t-0 rounded-b-xl flex flex-col flex-grow items-center text-center relative">
                                <h3 className="font-display text-xl md:text-xl font-black uppercase mb-3 mt-2 px-2 text-center leading-tight">{item.title}</h3>
                                
                                <p className="font-sans text-sm text-gray-600 mb-6 font-medium leading-relaxed px-2">
                                    {item.description}
                                </p>
                                
                                <div className="space-y-2 w-full mb-6 flex flex-wrap justify-center gap-2">
                                    {item.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-100 p-2 rounded border border-gray-200">
                                            <div className={`w-2 h-2 rounded-full ${item.color.replace('bg-', 'bg-')}`}></div>
                                            {feat}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto w-full pt-4 border-t-2 border-dashed border-gray-200">
                                    <div className="w-full bg-black text-white py-3 px-4 font-display font-black text-xl border-2 border-transparent group-hover:bg-uphoria-purple group-hover:border-black transition-all flex items-center justify-center gap-2 rounded-lg">
                                        BOOK NOW <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Accommodation;
