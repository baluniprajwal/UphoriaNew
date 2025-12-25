import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic2, Music, Zap, Calendar, Clock, MapPin, Heart, ArrowUpRight, Star, Disc, Sparkles, Radio, Play, Pause, Volume2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const artists = [
  { 
    id: 1, 
    name: "Artist 01", 
    genre: "TBA", 
    day: "Day 01",
    time: "8:00 PM",
    stage: "Main Arena",
    image: "/revealing/revealing_soon1.png", 
    color: "bg-uphoria-cyan", 
    hex: "#00F0FF",
    accent: "border-uphoria-cyan",
    rotate: "md:rotate-2" 
  },
  { 
    id: 2, 
    name: "Artist 02", 
    genre: "TBA", 
    day: "Day 02",
    time: "7:30 PM",
    stage: "Amphitheater",
    image: "/revealing/revealing_soon2.png", 
    color: "bg-uphoria-pink", 
    hex: "#FF007F",
    accent: "border-uphoria-pink",
    rotate: "md:-rotate-2 md:mt-16" // Staggered layout
  },
  { 
    id: 3, 
    name: "Artist 03", 
    genre: "TBA", 
    day: "Day 03",
    time: "9:00 PM",
    stage: "DJ Box",
    image: "/revealing/revealing_soon3.png", 
    color: "bg-uphoria-yellow", 
    hex: "#FFD60A",
    accent: "border-uphoria-yellow",
    rotate: "md:rotate-1" 
  },
];

const Artists: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLDivElement>(null);
  
  // Audio & Animation State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Animation Refs
  const vibeTweenRef = useRef<gsap.core.Tween | null>(null);
  const visualizerTweenRef = useRef<gsap.core.Tween | null>(null);
  const spotlightTweenRef = useRef<gsap.core.Tween | null>(null);
  const strobeTweenRef = useRef<gsap.core.Tween | null>(null);
  const titlePulseRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Initialize Audio
    audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3"); // Upbeat energetic track
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const ctx = gsap.context(() => {
      // 1. Mouse Parallax (Standard)
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        if (e.clientY < rect.top - 500 || e.clientY > rect.bottom + 500) return;

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(".bg-widget", {
            x: x * 60,
            y: y * 60,
            duration: 1,
            ease: "power2.out",
            stagger: 0.05
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);

      // 2. Marquee Scroll Effect
      gsap.to(marqueeRef.current, {
        xPercent: -20,
        ease: "none",
        duration: 15,
        repeat: -1,
        yoyo: true
      });

      // 3. Vinyl Spin
      gsap.to(vinylRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "linear"
      });

      // 4. Vibration Effect (The "Shake") - INCREASED INTENSITY
      vibeTweenRef.current = gsap.to(".vibe-content", {
        x: "random(-6, 6)", // Increased amplitude
        y: "random(-6, 6)", // Increased amplitude
        rotation: "random(-0.5, 0.5)", // Added slight rotation jitter
        scale: "random(0.99, 1.01)", 
        duration: 0.04, // Faster shake
        repeat: -1,
        yoyo: true,
        paused: true 
      });

      // 5. Sound Bars Animation - Controlled via state
      visualizerTweenRef.current = gsap.to(".sound-bar-active", {
        height: () => `${gsap.utils.random(10, 100)}%`,
        backgroundColor: () => gsap.utils.random(["#FF007F", "#00F0FF", "#FFD60A"]),
        duration: 0.08,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
            amount: 0.2,
            from: "random"
        },
        repeatRefresh: true,
        paused: true
      });

      // 6. Spotlight Animation - Controlled via state
      spotlightTweenRef.current = gsap.to(".concert-spotlight", {
        rotation: "random(-25, 25)",
        opacity: "random(0.4, 0.8)",
        duration: "random(1, 2)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
        paused: true
      });

      // 7. Strobe Flash - Controlled via state
      strobeTweenRef.current = gsap.to(".concert-strobe", {
        opacity: 0.15,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        paused: true
      });
      
      // 8. Title Pulse - Controlled via state
      titlePulseRef.current = gsap.to(".main-title", {
        textShadow: "0px 0px 20px rgba(255, 0, 127, 0.8), 0px 0px 40px rgba(0, 240, 255, 0.6)",
        scale: 1.05,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        paused: true
      });

      // 9. Floating Shapes (Standard)
      gsap.to(".float-shape", {
        y: "random(-30, 30)",
        rotation: "random(-20, 20)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });

      // 10. Entrance Animations
      gsap.fromTo(".artist-title-char", 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(".artist-card", 
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".artists-grid",
            start: "top 85%", 
          }
        }
      );

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => {
        ctx.revert();
        if(audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    };
  }, []);

  const toggleMusic = () => {
    if(!audioRef.current) return;

    if (isPlaying) {
        // Pause
        audioRef.current.pause();
        
        vibeTweenRef.current?.pause();
        visualizerTweenRef.current?.pause();
        spotlightTweenRef.current?.pause();
        strobeTweenRef.current?.pause();
        titlePulseRef.current?.pause();
        
        // Reset effects smoothly
        gsap.to(".vibe-content", { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.5 });
        gsap.to(".sound-bar-active", { height: "5%", backgroundColor: "#333", duration: 0.5 });
        gsap.to(".concert-spotlight", { opacity: 0, duration: 0.5 });
        gsap.to(".concert-strobe", { opacity: 0, duration: 0.1 });
        gsap.to(".main-title", { textShadow: "none", scale: 1, duration: 0.5 });

    } else {
        // Play
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
        
        vibeTweenRef.current?.play();
        visualizerTweenRef.current?.play();
        spotlightTweenRef.current?.play();
        strobeTweenRef.current?.play();
        titlePulseRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="artists" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-[#111] border-y-4 border-black min-h-screen flex flex-col justify-center perspective-1000">
        
        {/* --- CONCERT EFFECTS --- */}
        {/* Strobe Overlay */}
        <div className="concert-strobe absolute inset-0 bg-white mix-blend-overlay z-40 opacity-0 pointer-events-none"></div>

        {/* Spotlights */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="concert-spotlight absolute -top-[20%] left-[20%] w-[15vw] h-[150vh] bg-gradient-to-b from-uphoria-cyan/50 to-transparent blur-2xl origin-top opacity-0 transform -rotate-12"></div>
            <div className="concert-spotlight absolute -top-[20%] right-[20%] w-[15vw] h-[150vh] bg-gradient-to-b from-uphoria-pink/50 to-transparent blur-2xl origin-top opacity-0 transform rotate-12"></div>
             <div className="concert-spotlight absolute -top-[20%] left-[50%] w-[20vw] h-[150vh] bg-gradient-to-b from-white/30 to-transparent blur-2xl origin-top opacity-0"></div>
        </div>

        {/* Dynamic Grid Background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
             style={{
                backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(20deg)'
             }}>
        </div>

        {/* --- Wrappers for Vibration Effect --- */}
        <div className="vibe-content w-full h-full relative">

            {/* Background Marquee Text */}
            <div className="absolute top-10 md:top-20 left-0 w-[200%] md:w-full opacity-20 pointer-events-none select-none overflow-hidden whitespace-nowrap z-0">
                <div ref={marqueeRef} className="font-display font-black text-[10rem] md:text-[15rem] leading-none text-transparent text-outline-white tracking-tighter">
                    FEEL THE BEAT • LOVE THE MUSIC • UPHORIA 2026 • 
                </div>
            </div>

            {/* --- Background Widgets --- */}

            {/* Widget 1: Spinning Vinyl (Bottom Right) */}
            <div className="bg-widget absolute -bottom-20 -right-20 md:bottom-10 md:right-10 opacity-80 z-0 pointer-events-none">
                <div ref={vinylRef} className="w-64 h-64 md:w-96 md:h-96 bg-black rounded-full border-4 border-uphoria-pink flex items-center justify-center relative shadow-2xl">
                    <div className="absolute inset-2 rounded-full border border-gray-800 opacity-50"></div>
                    <div className="absolute inset-6 rounded-full border border-gray-800 opacity-50"></div>
                    <div className="absolute inset-10 rounded-full border border-gray-800 opacity-50"></div>
                    <div className="absolute inset-14 rounded-full border border-gray-800 opacity-50"></div>
                    <div className="absolute inset-20 rounded-full border border-gray-800 opacity-50"></div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-uphoria-yellow rounded-full flex items-center justify-center border-4 border-black">
                        <Music className={`text-black w-10 h-10 md:w-16 md:h-16 ${isPlaying ? 'animate-spin' : ''}`} />
                    </div>
                </div>
            </div>

            {/* Widget 2: Static Widget (Top Left) */}
            <div className="bg-widget absolute top-40 left-10 md:left-20 z-0 pointer-events-none opacity-90">
                 <div className="flex items-end gap-2 h-32">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`w-4 md:w-6 border-2 border-black transition-all ${isPlaying ? 'bg-uphoria-cyan h-full animate-pulse' : 'bg-gray-700 h-10'}`}></div>
                    ))}
                 </div>
                 <div className="text-uphoria-cyan font-display font-bold mt-2 rotate-1 tracking-widest">AUDIO VISUALIZER</div>
            </div>

            {/* Widget 3: Floating Stickers */}
            <div className="bg-widget float-shape absolute top-1/4 right-1/4 z-0 text-uphoria-yellow opacity-80">
                 <Star size={80} fill="#FFD60A" className="drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" />
            </div>
            <div className="bg-widget float-shape absolute bottom-1/3 left-1/4 z-0 text-uphoria-pink opacity-80">
                 <Heart size={60} fill="#FF007F" className="drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" />
            </div>
            <div className="bg-widget float-shape absolute top-32 right-32 z-0 text-white opacity-40 rotate-12">
                <div className="border-4 border-white p-2 font-display font-black text-4xl uppercase">
                    VIBE
                </div>
            </div>
            <div className="bg-widget float-shape absolute bottom-10 left-10 opacity-50 text-white hidden md:block">
                <Radio size={120} strokeWidth={1} />
            </div>

            {/* --- Main Content --- */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
                    <div className="inline-block bg-uphoria-yellow border-2 border-black px-4 py-1 font-hand font-bold text-lg rotate-2 mb-4 hard-shadow hover:scale-110 transition-transform">
                        GET READY TO SCREAM! 🎤
                    </div>
                    <h2 className="main-title relative z-10 font-display text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mix-blend-difference transition-all duration-300">
                        {"LINEUP".split("").map((char, i) => (
                            <span key={i} className="artist-title-char inline-block hover:text-uphoria-pink transition-colors cursor-default hover:-translate-y-4 hover:rotate-6 duration-300">
                                {char}
                            </span>
                        ))}
                    </h2>
                </div>

                <div className="artists-grid grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-start">
                    {artists.map((artist) => {
                        
                        // Inline styles for dynamic glow effects when playing
                        const glowStyle = isPlaying ? {
                            boxShadow: `8px 8px 0px ${artist.hex}, 0 0 20px ${artist.hex}80`,
                            borderColor: artist.hex,
                            backgroundColor: '#0a0a0a'
                        } : {};

                        const textGradient = isPlaying ? {
                            backgroundImage: `linear-gradient(135deg, white 0%, ${artist.hex} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent'
                        } : {};

                        return (
                        <div key={artist.id} className={`artist-card group relative ${artist.rotate} hover:z-20 transition-all duration-500`}>
                            
                            {/* Washi Tape - Changes from white to Neon Tape */}
                            <div 
                                className={`absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 backdrop-blur-sm border transform -rotate-1 shadow-sm z-30 transition-all duration-300`}
                                style={{ 
                                    backgroundColor: isPlaying ? artist.hex + '90' : 'rgba(255,255,255,0.5)',
                                    borderColor: isPlaying ? artist.hex : 'rgba(255,255,255,0.2)',
                                    boxShadow: isPlaying ? `0 0 10px ${artist.hex}` : 'none'
                                }}
                            ></div>

                            {/* Card Container */}
                            <div 
                                className={`relative p-3 pb-8 border-4 hard-shadow transition-all duration-300 transform group-hover:-translate-y-2 ${!isPlaying ? 'bg-white border-black group-hover:shadow-[8px_8px_0px_#FF007F]' : ''}`}
                                style={glowStyle}
                            >
                                
                                {/* Image Section */}
                                <div className={`relative aspect-[3/4] border-2 overflow-hidden bg-black mb-4 transition-colors duration-300 ${isPlaying ? 'border-gray-500' : 'border-black'}`}>
                                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <img 
                                        src={artist.image} 
                                        alt={artist.name} 
                                        className={`w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 ${isPlaying ? 'grayscale-0 contrast-125 saturate-150' : 'grayscale group-hover:grayscale-0'}`}
                                    />
                                    {/* Overlay Tag */}
                                    <div className={`absolute top-0 left-0 ${artist.color} px-3 py-1 border-b-2 border-r-2 border-black font-display font-bold text-base md:text-xl z-20`}>
                                        {artist.genre}
                                    </div>
                                    {/* Live Indicator */}
                                    <div className={`absolute top-2 right-2 flex items-center gap-1 bg-black/80 px-2 py-1 rounded-full border border-white/20 z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-100 shadow-[0_0_10px_red]' : 'opacity-0'}`}>
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        <span className="text-[10px] text-white font-bold uppercase">Live</span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="px-2">
                                    <h3 
                                        className={`font-display text-3xl md:text-4xl font-black uppercase mb-1 leading-none tracking-tight group-hover:text-uphoria-purple transition-colors duration-300 ${!isPlaying ? 'text-black' : ''}`}
                                        style={textGradient}
                                    >
                                        {artist.name}
                                    </h3>
                                    
                                    <div className={`flex flex-col gap-2 mt-4 pt-4 border-t-2 transition-colors duration-300 ${isPlaying ? 'border-white/20' : 'border-black/10'}`}>
                                        <div className={`flex items-center gap-2 font-sans font-bold transition-colors ${isPlaying ? 'text-gray-300 group-hover:text-white' : 'text-slate-600 group-hover:text-black'}`}>
                                            <Calendar size={18} className="text-uphoria-pink" />
                                            <span>{artist.day}</span>
                                            <span className={`w-1 h-1 rounded-full mx-1 ${isPlaying ? 'bg-white' : 'bg-black'}`}></span>
                                            <Clock size={18} className="text-uphoria-pink" />
                                            <span>{artist.time}</span>
                                        </div>
                                        <div className={`flex items-center gap-2 font-sans font-bold transition-colors ${isPlaying ? 'text-gray-300 group-hover:text-white' : 'text-slate-600 group-hover:text-black'}`}>
                                            <MapPin size={18} className="text-uphoria-cyan" />
                                            <span>Main Stage</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Action Button - Now pops with an animation */}
                                <div className="absolute -bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 z-30">
                                    <button className={`${artist.color} border-2 border-black px-6 py-2 font-display font-black text-lg flex items-center gap-2 hard-shadow hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95 text-black`}>
                                        LISTEN <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Decorative background shape - Standard Mode Only */}
                            {!isPlaying && (
                                <div className={`absolute -inset-2 ${artist.color} -z-10 border-2 border-black hidden group-hover:block transition-all duration-300`}></div>
                            )}
                        </div>
                    )})}
                </div>
                
                {/* Play/Pause Controller - Moved Below Cards */}
                <div className="mt-24 flex flex-col items-center justify-center gap-6 relative z-50">
                    <button 
                        onClick={toggleMusic}
                        className={`group flex items-center gap-3 px-8 py-3 rounded-full border-4 border-black transition-all duration-300 hard-shadow active:translate-y-1 active:shadow-none hover:scale-105 ${isPlaying ? 'bg-uphoria-pink text-white animate-bounce shadow-[0_0_20px_#FF007F]' : 'bg-white text-black'}`}
                    >
                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                        <span className="font-display font-black text-xl uppercase tracking-wider">
                            {isPlaying ? "LIVE ON STAGE!" : "DROP THE BEAT"}
                        </span>
                    </button>
                    
                    <p className="text-white/50 font-hand text-xl animate-pulse cursor-pointer hover:text-white transition-colors">
                        + 10 more local artists performing!
                    </p>
                </div>
            </div>
        </div>

        {/* --- DYNAMIC VISUALIZER OVERLAY (Appears when music plays) --- */}
        <div className={`absolute bottom-0 left-0 w-full h-40 md:h-72 pointer-events-none flex items-end justify-center gap-[2px] md:gap-1 px-4 z-30 transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
             {[...Array(40)].map((_, i) => (
                 <div 
                    key={i} 
                    className="sound-bar-active w-full bg-gray-800 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    style={{ height: '5%' }}
                 ></div>
             ))}
        </div>

    </section>
  );
};

export default Artists;
