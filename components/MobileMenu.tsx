import React from 'react';

export default function MobileMenu({ isOpen, closeMenu }: { isOpen: boolean; closeMenu: () => void }) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center gap-8 bg-[#0a0a0f] transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <a href="#hero" onClick={closeMenu} className="text-white text-2xl uppercase tracking-widest hover:text-blue-500 transition-colors">Home</a>
      <a href="#about" onClick={closeMenu} className="text-white text-2xl uppercase tracking-widest hover:text-blue-500 transition-colors">About</a>
      <a href="#services" onClick={closeMenu} className="text-white text-2xl uppercase tracking-widest hover:text-blue-500 transition-colors">Services</a>
      <a href="#skills" onClick={closeMenu} className="text-white text-2xl uppercase tracking-widest hover:text-blue-500 transition-colors">Skills</a>
      <a href="#contact" onClick={closeMenu} className="text-white text-2xl uppercase tracking-widest hover:text-blue-500 transition-colors">Contact</a>
    </div>
  );
}
