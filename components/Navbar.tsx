import React from 'react';

export default function Navbar({ isScrolled, toggleMobileMenu }: { isScrolled: boolean; toggleMobileMenu: () => void }) {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 transition-all duration-300 ${isScrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      
      <a href="#hero" className="text-white text-2xl font-bold tracking-wider">
        JO<span className="text-blue-500">E</span>L
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none">
        <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-widest uppercase">Home</a></li>
        <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-widest uppercase">About</a></li>
        <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-widest uppercase">Services</a></li>
        <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-widest uppercase">Skills</a></li>
        <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-widest uppercase">Contact</a></li>
      </ul>

      <a href="#contact" className="hidden md:flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 text-white text-sm hover:bg-white/10 transition-all duration-200">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        Available for work
      </a>

      <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={toggleMobileMenu}>
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
      </div>

    </nav>
  );
}