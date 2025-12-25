import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, MapPin, Sparkles, Music, Zap, Star, Heart, Calendar as CalendarIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Updated Festival Days based on new data dates
const festivalDays = [
  { id: 1, label: "Day 01", date: "Feb 14", color: "bg-uphoria-pink" },
  { id: 2, label: "Day 02", date: "Feb 15", color: "bg-uphoria-cyan" },
  { id: 3, label: "Day 03", date: "Feb 16", color: "bg-uphoria-yellow" },
];

// Provided Schedule Data
const scheduleData = [
  {
    dayId: 1,
    day: "Day 01",
    date: "Feb 14",
    events: [
      { id: "01", title: "Rockmania", type: "Battle of Bands" },
      { id: "02", title: "Bars Mayhem", type: "Rap" },
      { id: "03", title: "Kalaa Sangam", type: "Duet Dance" },
      { id: "04", title: "Nrityakala", type: "Group dance" },
      { id: "05", title: "Chandrakala", type: "Solo Dance" },
      { id: "06", title: "Uphoria uncut", type: "vlog" },
      { id: "07", title: "Battleground blitz", type: "BGMI" },
      { id: "08", title: "FIFA showdown", type: "FIFA" },
      { id: "09", title: "Valorant battle arena", type: "VPL" },
      { id: "10", title: "Tekken showdown", type: "Tekken" },
      { id: "11", title: "Comedy Clash", type: "Standup comedy" },
      { id: "12", title: "Picture perfect", type: "Photography competition" },
      { id: "13", title: "Reel rush", type: "reel making" },
      { id: "14", title: "SUPERNOVA", type: "Fashion Show" },
      { id: "15", title: "Graffiti Groove", type: "Graffiti" },
      { id: "16", title: "Mr. and Ms. Uphoria", type: "Talent Hunt" },
    ],
  },
  {
    dayId: 2,
    day: "Day 02",
    date: "Feb 15",
    events: [
      { id: "01", title: "Aaroh", type: "Indian Solo Singing" },
      { id: "02", title: "Reverb", type: "Western Solo Singing" },
      { id: "03", title: "Mridang", type: "Instrumental solo" },
      { id: "04", title: "Raaga refusion", type: "Duo instrumental" },
      { id: "05", title: "Aagaaz", type: "Street Play" },
      { id: "06", title: "Abhinay", type: "Mono Act" },
      { id: "07", title: "Bardic Battles", type: "Poetry(Eng)" },
      { id: "08", title: "Mehfil-e-alfaz", type: "Poetry(Hindi)" },
      { id: "09", title: "popcorn and Playoffs", type: "Quiz" },
      { id: "10", title: "Just a minute", type: "Speak for a minute" },
      { id: "11", title: "Uphoria uncut", type: "vlog" },
      { id: "12", title: "Rangoli Realm", type: "Rangoli" },
      { id: "13", title: "Graffiti Groove", type: "Graffiti" },
      { id: "14", title: "Tee Typography", type: "Tshirt painting" },
      { id: "15", title: "Valorant battle arena", type: "VPL" },
      { id: "16", title: "Reel Rush", type: "reel making" },
      { id: "17", title: "Picture perfect", type: "Photography competition" },
    ],
  },
  {
    dayId: 3,
    day: "Day 03",
    date: "Feb 16",
    events: [
      { id: "01", title: "Rangmanch", type: "Stage Play" },
      { id: "02", title: "Improvleela", type: "Improv" },
      { id: "03", title: "Beat Blitz", type: "Solo Dance" },
      { id: "04", title: "Groove Wars", type: "Group dance" },
      { id: "05", title: "Freestyle Frenzy", type: "Group Battle" },
      { id: "06", title: "Uphoria uncut", type: "Vlog" },
      { id: "07", title: "Sky High", type: "Rocket making" },
      { id: "08", title: "Doodle Dash", type: "Doodling" },
      { id: "09", title: "Mandala magic", type: "Mandala Art" },
      { id: "10", title: "Sketch Sprint", type: "Sketching" },
      { id: "11", title: "Pixel play", type: "Digital art (online)" },
      { id: "12", title: "Reel Rush", type: "reel making" },
      { id: "13", title: "Picture perfect", type: "Photography competition" },
    ],
  },
];

const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const eventsContainerRef = useRef<HTMLDivElement>(null);

  // Helper to generate consistent vibrant styles for the dynamic data
  const getEventStyle = (index: number) => {
    const colors = ["bg-uphoria-pink", "bg-uphoria-cyan", "bg-white", "bg-black", "bg-uphoria-yellow", "bg-uphoria-purple"];
    const rotations = ["rotate-2", "-rotate-1", "rotate-1", "-rotate-2", "rotate-3", "-rotate-3"];
    const icons = [<Music size={20} />, <Zap size={20} />, <Sparkles size={20} />, <Heart size={20} />, <Star size={20} />];
    
    const color = colors[index % colors.length];
    return {
      color,
      rotate: rotations[index % rotations.length],
      textColor: (color === "bg-black" || color === "bg-uphoria-purple") ? "text-white" : "text-black",
      icon: icons[index % icons.length]
    };
  };

  // Transform raw schedule data into UI-ready data
  const activeDayData = scheduleData.find(d => d.dayId === activeDay);
  const currentEvents = activeDayData ? activeDayData.events.map((event, index) => ({
    ...event,
    ...getEventStyle(index),
    location: "Campus Venue", // Default location as it's not in the data
    timeBadge: `Event ${event.id}` // Using ID as badge since exact time isn't provided
  })) : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Enhanced Background Blobs Animation
      gsap.to(".timeline-bg-blob", {
        x: "random(-80, 80)",
        y: "random(-80, 80)",
        rotation: "random(-45, 45)",
        scale: "random(0.8, 1.2)",
        duration: "random(6, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
      });
      
      // Rotate giant background icons
      gsap.to(".bg-giant-icon", {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "linear"
      });

      // Line drawing animation
      gsap.fromTo(lineRef.current, 
        { height: "0%" },
        { 
          height: "100%", 
          ease: "none",
          scrollTrigger: {
            trigger: eventsContainerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
            id: "line-anim"
          }
        }
      );

      // Advanced Item Animations
      const items = gsap.utils.toArray('.timeline-item') as HTMLElement[];
      items.forEach((item, index) => {
        const content = item.querySelector('.timeline-content');
        const dot = item.querySelector('.timeline-dot');
        const connector = item.querySelector('.timeline-connector');
        
        // Even index = Right side (because of flex-row-reverse), Odd index = Left side
        const isRightSide = index % 2 === 0; 
        const xOffset = isRightSide ? 100 : -100;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        // 1. Dot pops in
        tl.fromTo(dot, 
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }
        )
        // 2. Connector grows
        .fromTo(connector,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
          "-=0.4"
        )
        // 3. Content slides and bounces in
        .fromTo(content,
          { x: xOffset, opacity: 0, scale: 0.8 },
          { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.2"
        );
      });
      
      ScrollTrigger.refresh();
      
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getById("line-anim")?.kill();
    };
  }, [activeDay, currentEvents]); // Re-run when activeDay or data changes

  return (
    <section id="timeline" ref={containerRef} className="py-24 relative bg-[#FFF0F5] border-t-4 border-black overflow-hidden min-h-screen">
      
      {/* 1. Dynamic Gradient Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0F5] via-white to-[#F0F8FF] opacity-80"></div>

          {/* Large Vibrant Blobs with Mixing */}
          <div className="timeline-bg-blob absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-uphoria-pink/20 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="timeline-bg-blob absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-uphoria-cyan/20 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="timeline-bg-blob absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] bg-uphoria-yellow/20 rounded-full blur-[120px] mix-blend-multiply"></div>
          
          {/* Pattern Overlay: Dot Grid */}
          <div className="absolute inset-0 opacity-[0.08]" 
               style={{
                   backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                   backgroundSize: '32px 32px'
               }}>
          </div>
      </div>
      
      {/* 2. Large Background Typography & Icons */}
      <div className="absolute top-40 right-4 lg:right-10 opacity-[0.03] pointer-events-none select-none hidden md:block">
           <div className="font-display font-black text-[10rem] lg:text-[14rem] leading-none text-black rotate-90 origin-right">
              SCHEDULE
           </div>
      </div>
      
      <div className="bg-giant-icon absolute top-20 left-[5%] text-black/5 pointer-events-none z-0">
         <Music size={120} className="md:w-[200px] md:h-[200px]" strokeWidth={1} />
      </div>
      <div className="bg-giant-icon absolute bottom-40 right-[15%] text-black/5 pointer-events-none z-0" style={{animationDelay: '-5s'}}>
         <Sparkles size={100} className="md:w-[180px] md:h-[180px]" strokeWidth={1} />
      </div>
      <div className="absolute top-1/3 left-[15%] text-uphoria-pink/10 pointer-events-none z-0 rotate-12">
          <Heart size={80} className="md:w-[120px] md:h-[120px]" strokeWidth={2} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
             <div className="inline-block bg-white border-2 border-black px-4 py-1 font-hand font-bold text-lg -rotate-2 mb-4 hard-shadow">
                PLAN YOUR DAY 📅
             </div>
             <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-black mb-4 uppercase tracking-tighter drop-shadow-sm">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-uphoria-pink to-uphoria-purple">Timeline</span>
            </h2>
        </div>

        {/* Day Selectors */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20">
          {festivalDays.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`relative group transition-all duration-300 transform hover:-translate-y-2 ${activeDay === day.id ? 'scale-110 z-10' : 'scale-100 hover:rotate-2'}`}
            >
              <div className={`absolute inset-0 border-4 border-black translate-x-1 translate-y-1 transition-transform ${activeDay === day.id ? 'bg-black' : 'bg-transparent'}`}></div>
              <div className={`relative border-4 border-black px-6 py-3 md:px-8 md:py-4 flex flex-col items-center ${activeDay === day.id ? day.color : 'bg-white'}`}>
                <span className="font-display font-black text-2xl md:text-3xl uppercase">{day.label}</span>
                <span className="font-hand font-bold text-xs md:text-sm border-t-2 border-black pt-1 mt-1 w-full flex items-center justify-center gap-2">
                    <CalendarIcon size={14} /> {day.date}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div ref={eventsContainerRef} className="relative max-w-5xl mx-auto min-h-[500px]">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-3 bg-black/5 transform md:-translate-x-1/2 rounded-full border border-black/5"></div>
          <div ref={lineRef} className="absolute left-4 md:left-1/2 top-0 w-3 bg-black transform md:-translate-x-1/2 rounded-full z-0 origin-top h-0 shadow-[2px_0px_0px_rgba(0,0,0,0.2)]"></div>

          <div className="flex flex-col gap-12 md:gap-16 pb-12">
            {currentEvents.map((item, index) => (
              <div key={`${activeDay}-${item.id}`} className={`timeline-item flex flex-col md:flex-row items-center w-full relative z-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} flex items-center ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                  
                  {/* Connector Line (Desktop only) */}
                  <div className={`timeline-connector hidden md:block absolute top-1/2 h-1 bg-black w-16 border-y-2 border-black ${index % 2 === 0 ? 'right-[50%] mr-4 origin-right' : 'left-[50%] ml-4 origin-left'}`}></div>

                  {/* Card */}
                  <div className={`timeline-content w-fit max-w-full relative ${item.color} p-4 md:p-6 border-4 border-black hard-shadow ${item.rotate} group hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer`}>
                     {/* Decorative Washi Tape */}
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/50 backdrop-blur-sm border border-black/10 rotate-2 z-10"></div>
                     
                     {/* Badge */}
                     <div className="absolute -top-4 -right-2 bg-black text-white font-bold font-sans px-3 py-1 -rotate-6 group-hover:rotate-0 transition-transform border-2 border-white shadow-sm z-20 text-xs">
                        {item.timeBadge}
                     </div>

                     <div className={`flex items-center gap-2 mb-3 font-sans font-bold text-xs uppercase tracking-widest border-b-2 ${item.textColor === 'text-white' ? 'border-white/30' : 'border-black/10'} pb-2 ${item.textColor === 'text-white' ? 'text-white/80' : 'text-black/70'}`}>
                        <MapPin size={12} />
                        {item.location}
                     </div>
                     
                     <div className="flex justify-between items-start gap-4">
                        <h3 className={`font-display text-lg md:text-2xl lg:text-3xl font-black uppercase mb-2 leading-none ${item.textColor}`}>{item.title}</h3>
                        <div className={`shrink-0 p-2 rounded-full border-2 ${item.textColor === 'text-white' ? 'border-white text-white' : 'border-black text-black'} opacity-0 group-hover:opacity-100 transition-opacity transform rotate-12`}>
                            {item.icon}
                        </div>
                     </div>
                     
                     <p className={`font-hand font-bold text-base md:text-lg leading-tight ${item.textColor === 'text-white' ? 'text-white/90' : 'text-black/80'}`}>{item.type}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="timeline-dot absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-black rounded-full z-20 flex items-center justify-center shadow-[4px_4px_0px_#000]">
                    <div className={`w-4 h-4 ${item.color} border-2 border-black rounded-full`}></div>
                </div>

                {/* Empty Side */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Timeline;