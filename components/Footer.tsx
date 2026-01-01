import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const avatarSrc = (initials: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
        <rect width="96" height="96" rx="48" fill="#F5F5F5"/>
        <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit, Arial, sans-serif" font-size="36" fill="#111111">${initials}</text>
      </svg>`
    )}`;

  const techTeam = [
    { name: "Prajwal", img: "/team/prajwal.jpg", url: "https://www.linkedin.com/in/prajwal-baluni-5a4b31263/" },
    { name: "Sarthak", img: "/team/sarthak.jpeg", url: "https://www.linkedin.com/in/sarthak-gautam-80a008293/" },
    { name: "Vansh", img: "/team/vansh.jpeg", url: "https://www.linkedin.com/in/vanshsingh07/" },
    { name: "Ujjwal", img: "/team/ujjwal.jpeg", url: "https://www.linkedin.com/in/ujjwal-tyagi-49b987292/" },
    { name: "Suryansh", img: "/team/suryansh.jpeg", url: "https://www.linkedin.com/in/suryansh-dhatwalia-8b137428b/" },
    { name: "Garvit", img: "/team/garvit.jpg", url: "https://www.linkedin.com/in/garvit-mudgil-7b59242b6/" },
  ];


  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-10 border-t-4 border-uphoria-pink relative overflow-hidden font-sans">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About (Width: 5 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-4 text-uphoria-pink mb-6 font-display font-bold tracking-widest text-sm">
               <span className="w-12 h-[2px] bg-uphoria-pink"></span> EST. 2026
            </div>

            {/* Full Logo */}
            <div className="mb-6 relative w-full max-w-[460px]">
               <img
                 src="/full_logo.png"
                 alt="Uphoria"
                 className="w-full h-auto"
                 loading="lazy"
               />
            </div>

            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Bennett University's premier cultural fest. Where creativity meets competition, and talent finds its stage.
            </p>

            <div className="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">
              FOLLOW THE MOVEMENT
            </div>
            <div className="flex gap-4">
               <a href="https://www.instagram.com/bennett.uphoria?igsh=MnkwMDhpYmpzZW5s" target="_blank" rel="noreferrer" className="w-12 h-12 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <Instagram size={20} />
               </a>
               <a href="https://www.linkedin.com/company/bennett-university-student-council/" target="_blank" rel="noreferrer" className="w-12 h-12 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <Linkedin size={20} />
               </a>
            </div>
          </div>

          {/* Column 2: Contact (Width: 4 cols) */}
          <div className="lg:col-span-3">
             <h3 className="font-display text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-uphoria-pink"></span> CONTACT
             </h3>

             <div className="flex flex-col gap-6">
                <a href="mailto:uphoria@bennett.edu.in" className="flex items-center gap-3 text-gray-300 hover:text-uphoria-pink transition-colors group">
                   <Mail size={18} className="text-uphoria-pink group-hover:scale-110 transition-transform" />
                   <span className="border-b border-transparent group-hover:border-uphoria-pink break-all">uphoria@bennett.edu.in</span>
                </a>

                <div className="space-y-4 text-sm text-gray-400">
                   <div className="flex items-start gap-3">
                      <Phone size={16} className="text-uphoria-pink mt-1 shrink-0" />
                      <div>
                         <span className="text-white block font-bold">Adamya</span>
                         <span>Convener — 9115491195</span>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                      <Phone size={16} className="text-uphoria-pink mt-1 shrink-0" />
                      <div>
                         <span className="text-white block font-bold">Kriti</span>
                         <span>Outreach Coordinator — 8765295405</span>
                      </div>
                   </div>

                   <div className="flex items-start gap-3">
                      <Phone size={16} className="text-uphoria-pink mt-1 shrink-0" />
                      <div>
                         <span className="text-white block font-bold">Anshuman</span>
                         <span>Outreach Coordinator — 7988760614</span>
                      </div>
                   </div>

                   <div className="flex items-start gap-3">
                      <Phone size={16} className="text-uphoria-pink mt-1 shrink-0" />
                      <div>
                         <span className="text-white block font-bold">Krish</span>
                         <span>Sponsorship Coordinator — 8569968662</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Column 3: Location (Width: 3 cols) */}
          <div className="lg:col-span-3">
             <h3 className="font-display text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-uphoria-pink"></span> LOCATION
             </h3>
             
             <div className="flex items-start gap-3 text-gray-400 leading-relaxed group">
                <MapPin size={20} className="text-uphoria-pink mt-1 shrink-0 group-hover:animate-bounce" />
                <p>
                  Plot Nos 8—11, TechZone II,<br/>
                  Greater Noida 201310,<br/>
                  Uttar Pradesh, India<br/>
                  <br/>
                  <span className="text-white font-bold border-b border-gray-700 pb-1">Bennett University</span>
                </p>
             </div>
          </div>

        </div>

        {/* Tech Team Section - Positioned Bottom Right above the line */}
        <div className="flex flex-col items-center md:items-end mb-4 md:mr-2">
             <div className="flex items-center justify-center md:justify-end pl-0 md:pl-3">
                {techTeam.map((member, i) => (
                    <a
                        key={i}
                        href={member.url}
                        target="_blank"
                        rel="noreferrer"
                        onBlur={(event) => event.currentTarget.blur()}
                        className="group/avatar relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#111] bg-black -ml-3 first:ml-0 cursor-pointer hover:z-30 hover:-translate-y-2 hover:scale-110 transition-all duration-300 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uphoria-cyan"
                    >
                        <img 
                            src={member.img} 
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full transition-all duration-300"
                            loading="lazy"
                        />
                        
                        {/* Polaroid Hover Effect */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 w-28 bg-white p-2 pb-7 border-2 border-black shadow-[4px_4px_0px_#FF007F] opacity-0 group-hover/avatar:opacity-100 group-focus-within/avatar:opacity-100 group-active/avatar:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-4 group-hover/avatar:translate-y-0 group-focus-within/avatar:translate-y-0 group-active/avatar:translate-y-0 rotate-6 group-hover/avatar:rotate-0 group-focus-within/avatar:rotate-0 group-active/avatar:rotate-0 origin-bottom z-50">
                            {/* Pin/Tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-uphoria-yellow rounded-full border-2 border-black z-10 shadow-sm flex items-center justify-center">
                                <div className="w-2 h-2 bg-black/20 rounded-full"></div>
                            </div>
                            
                            <div className="w-full aspect-square bg-gray-100 border border-black overflow-hidden mb-1">
                                 <img src={member.img} alt={member.name} className="w-full h-full object-cover filter contrast-125" />
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-full text-center pb-2">
                                <span className="font-hand font-black text-black text-sm uppercase tracking-wide transform -rotate-2 inline-block">{member.name}</span>
                            </div>
                        </div>
                    </a>
                ))}
             </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-600 font-bold tracking-widest uppercase text-center">
          <div className="flex items-center gap-2 mb-2 md:mb-0 order-2 md:order-none">
             <span>&copy; 2026 UPHORIA FEST</span>
             <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
             <span>ALL RIGHTS RESERVED</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm md:text-base order-1 md:order-none mb-2 md:mb-0">
             DEVELOPED BY <a href="https://www.instagram.com/builditservices" target="_blank" rel="noreferrer" className="text-uphoria-pink flex items-center gap-1 hover:text-white transition-colors">BUILDIT <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
