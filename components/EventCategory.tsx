import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Ticket } from "lucide-react";
import gsap from "gsap";
import { categories, getEventsForCategory } from "../data";

const EventCategory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const categoryId = parseInt(id || "0");
  const category = categories.find((c) => c.id === categoryId);
  const events = getEventsForCategory(categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".category-header",
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () =>
            gsap.set(".category-header", { clearProps: "all" }),
        }
      );

      // Card Stagger Animation
      gsap.fromTo(
        ".event-ticket",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
          onComplete: () =>
            gsap.set(".event-ticket", { clearProps: "all" }),
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-uphoria-pink text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black font-display mb-4">
            Category Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-6 py-2 font-bold font-hand border-2 border-white"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#FFF0F5] pt-24 md:pt-32 pb-20 overflow-hidden relative"
    >
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
         <div className={`absolute -top-20 -right-20 w-96 h-96 ${category.color} rounded-full blur-[100px]`}></div>
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 font-hand font-bold text-lg md:text-xl mb-10 hover:-translate-x-2 transition-transform"
        >
          <div className="bg-white p-3 rounded-full border-2 border-black hard-shadow group-hover:bg-uphoria-yellow transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span>Back to Categories</span>
        </button>

        {/* Header */}
        <div className="category-header mb-12 md:mb-16">
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase text-black drop-shadow-[2px_2px_0px_#fff] md:drop-shadow-[4px_4px_0px_#fff] break-words leading-none">
            {category.title}
          </h1>
          <div className="inline-block mt-4 bg-black text-white px-4 py-2 md:px-6 font-hand text-lg md:text-xl rotate-1">
            {category.category}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="event-ticket relative group bg-white border-4 border-black 
                           hard-shadow transition-all hover:-translate-y-2 
                           hover:shadow-[8px_8px_0px_#000] 
                           flex flex-col md:flex-row min-h-[250px]"
              >
                {/* External Notches */}
                <div className="absolute top-1/2 left-0 w-8 h-8 bg-[#FFF0F5] border-r-4 border-black rounded-full -translate-x-1/2 -translate-y-1/2 z-20"></div>
                <div className="absolute top-1/2 right-0 w-8 h-8 bg-[#FFF0F5] border-l-4 border-black rounded-full translate-x-1/2 -translate-y-1/2 z-20"></div>
                
                {/* Content Container */}
                <div className="flex-1 flex flex-col md:flex-row w-full">
                    
                    {/* Left Info Section */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-hidden">
                         <div>
                            <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                                {event.date}
                            </span>
                            
                            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-3 leading-tight break-words hyphens-auto">
                                {event.title}
                            </h3>
                            
                            <p className="font-sans text-sm md:text-base text-gray-600 font-medium mb-6 line-clamp-3">
                            {event.description}
                            </p>
                         </div>
                         
                         <div className="flex flex-wrap gap-4 text-xs md:text-sm font-bold text-gray-800">
                            <div className="flex items-center gap-2">
                              <Clock size={16} className="text-uphoria-pink" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-uphoria-cyan" />
                              {event.venue}
                            </div>
                         </div>
                    </div>

                    {/* Divider Line */}
                    <div className="relative md:w-px md:my-6 md:border-l-2 border-t-2 md:border-t-0 border-dashed border-gray-300 mx-6 md:mx-0"></div>

                    {/* Right Action Section */}
                    <div className="p-6 md:py-8 md:px-4 md:w-[240px] shrink-0 flex flex-col justify-center items-center bg-gray-50/30">
                         <a 
                           href={event.registerUrl} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-full group-hover:scale-105 transition-transform bg-uphoria-yellow hover:bg-black hover:text-white border-2 border-black px-4 py-3 font-display font-black text-lg flex items-center justify-center gap-2 hard-shadow active:scale-95 text-black whitespace-nowrap"
                         >
                           REGISTER <Ticket size={20} strokeWidth={2.5} />
                         </a>
                    </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="font-hand text-2xl md:text-3xl text-gray-500">
                No events found for this category yet!
              </h3>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-20">
          <p className="font-hand text-lg md:text-xl text-gray-500 animate-bounce">
            See you there! 🤘
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCategory;