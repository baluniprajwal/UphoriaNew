import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <span>&copy; 2026 UPHORIA FEST</span>
             <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
             <span>ALL RIGHTS RESERVED</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
             DEVELOPED BY <a href="https://www.instagram.com/builditservices" target="_blank" rel="noreferrer" className="text-uphoria-pink flex items-center gap-1 hover:text-white transition-colors">BUILDIT <ArrowUpRight size={12} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
