"use client";

import { useEffect, useState } from "react";
import "./portfolio.css";

import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechLogos from "@/components/TechLogos";
import About from "@/components/About";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function PortfolioPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll handling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      // Reveal animations
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Page loader
    const loader = document.getElementById("loader");
    if (loader && loader.classList) {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 500);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor movement
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div onMouseMove={handleMouseMove} style={{ minHeight: "100vh" }}>
      <Loader />
      <Cursor x={cursorPos.x} y={cursorPos.y} />
      <div className="bg-grid"></div>
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
      <Navbar isScrolled={isScrolled} toggleMobileMenu={toggleMobileMenu} />
      
      <Hero />
      <TechLogos />
      <About />
      <Services />
      <Brands />
      <Skills />
      <Contact />
      <Footer />
      
      <ScrollToTop show={showScrollTop} />
    </div>
  );
}
