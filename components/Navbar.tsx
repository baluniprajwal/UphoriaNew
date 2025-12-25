import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import gsap from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-link', 
        { rotate: -10, opacity: 0, x: -50 },
        { rotate: 0, opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Artists', href: '#artists' },
    { name: 'Events', href: '#events' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Sponsors', href: '/sponsors'},
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    
    if (href.startsWith('/') && !href.startsWith('/#')) {
      navigate(href);
    } else {
      
      let targetId = href.replace('#', '');
      const lenis = (window as any).lenis as { scrollTo?: (target: any, options?: any) => void } | undefined;
      
      if (location.pathname !== '/' && !href.startsWith('/')) {
         navigate('/', { state: { scrollTo: targetId } });
      } else {
         const element = document.getElementById(targetId);
         if (element) {
           if (lenis?.scrollTo) {
             lenis.scrollTo(element, { offset: 0 });
           } else {
             element.scrollIntoView({ behavior: 'smooth' });
           }
         }
      }
    }
  };

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0 flex justify-center`}>
      <div className={`w-full md:w-auto transition-all duration-300 ${scrolled ? 'bg-white border-2 border-black hard-shadow -rotate-1' : 'bg-transparent border-transparent'} px-6 py-3 rounded-full flex justify-between md:justify-center items-center gap-8`}>
        
        <button onClick={() => handleNavClick('#hero')} className="flex items-center gap-3 text-slate-900 transform hover:scale-110 transition-transform">
          <img src="/logo1.png" alt="Uphoria" className="h-10 md:h-12 w-auto" loading="lazy" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className={`font-hand text-lg font-bold text-slate-900 hover:text-uphoria-pink transition-colors transform hover:-rotate-3 inline-block ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black bg-uphoria-yellow p-2 rounded-lg border-2 border-black hard-shadow active:translate-y-1 active:shadow-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-0 bg-uphoria-pink/95 z-40 flex flex-col items-center justify-center gap-6 md:hidden">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
            <X size={40} />
          </button>
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className="mobile-link font-hand text-5xl font-bold text-white hover:text-uphoria-yellow transition-colors -rotate-2"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
