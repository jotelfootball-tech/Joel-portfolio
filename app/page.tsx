"use client";

import { useEffect, useState } from "react";
import "./portfolio.css";

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
      {/* Page Loader */}
      <div className="page-loader" id="loader">
        <div className="loader-text">IVANN</div>
      </div>

      {/* Cursor */}
      <div
        className="cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      {/* BG Grid */}
      <div className="bg-grid"></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`} id="mobileMenu">
        <a href="#hero" onClick={closeMobileMenu}>Home</a>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#services" onClick={closeMobileMenu}>Services</a>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </div>

      {/* NAV */}
      <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
        <a href="#hero" className="nav-logo">IV<span>A</span>NN</a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-btn">
          <span className="dot"></span>Available for work
        </a>
        <div className="hamburger" id="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>

        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="blink"></span>
            Full Stack Developer · Based in Nigeria
          </div>
          <h1 className="hero-name">
            HEY,<br />I&apos;M
            <span className="line2">IVANN</span>
          </h1>
          <p className="hero-role">Full Stack Developer & UI/UX Engineer</p>
          <p className="hero-desc">
            I build <strong>fast, beautiful, and accessible</strong> digital
            experiences. From stunning frontends to robust backends — crafting
            solutions that live at the intersection of <strong>design and engineering</strong>.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn-primary">🚀 See My Work</a>
            <a href="#contact" className="btn-outline">💬 Let&apos;s Talk</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">5+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat">
              <div className="stat-num">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrapper">
            <div className="hero-img-ring2"></div>
            <div className="hero-img-ring"></div>
            <div className="hero-img-glow"></div>
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" 
              className="hero-img" 
              alt="Ivann" 
            />
            {/* Floating badges */}
            <div className="badge badge-b1">
              <span className="badge-icon">⚡</span>
              <div>
                <span className="badge-val">Next.js</span>
                <span className="badge-label">Expert</span>
              </div>
            </div>
            <div className="badge badge-b2">
              <span className="badge-icon">🎨</span>
              <div>
                <span className="badge-val">Design</span>
                <span className="badge-label">UI/UX</span>
              </div>
            </div>
            <div className="badge badge-b3">
              <span className="badge-icon">⚙️</span>
              <div>
                <span className="badge-val">Backend</span>
                <span className="badge-label">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech logos strip */}
      <section style={{ zIndex: 2, position: "relative", marginTop: "2rem" }}>
        <div className="section-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="tech-strip reveal">
            <div className="tech-strip-label">Technologies I work with</div>
            <div className="tech-logos">
              <span className="tech-logo">React</span>
              <span className="tech-logo">Next.js</span>
              <span className="tech-logo">TypeScript</span>
              <span className="tech-logo">Node.js</span>
              <span className="tech-logo">Tailwind CSS</span>
              <span className="tech-logo">PostgreSQL</span>
              <span className="tech-logo">GraphQL</span>
              <span className="tech-logo">Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-inner">
          <div className="reveal">
            <div className="eyebrow">Discover</div>
            <h2 className="section-title">About <span>Me</span></h2>
            <p className="section-sub">A brief look into who I am and what pushes me to create.</p>
          </div>
          <div className="about-grid reveal">
            <div className="about-text">
              <p>
                I am a passionate <strong>Full Stack Developer</strong> and UI/UX enthusiast based in Nigeria. 
                With a profound love for creating intuitive and dynamic user experiences, I bridge the gap between
                visionary design and solid engineering.
              </p>
              <p>
                My journey started over 5 years ago, and since then I&apos;ve been constantly learning and adapting
                to new technologies. I believe that great software is not just about writing code, but solving real
                problems for real people.
              </p>
              <div className="tag-cloud">
                <span className="tag">Creative Problem Solving</span>
                <span className="tag">System Architecture</span>
                <span className="tag">User-Centric Design</span>
                <span className="tag">Agile Methodology</span>
              </div>
            </div>
            <div className="about-cards">
              <div className="a-card">
                <div className="a-card-icon">💻</div>
                <div className="a-card-num">10k+</div>
                <div className="a-card-label">Hours Coded</div>
              </div>
              <div className="a-card">
                <div className="a-card-icon">🚀</div>
                <div className="a-card-num">50+</div>
                <div className="a-card-label">Projects Launched</div>
              </div>
              <div className="a-card">
                <div className="a-card-icon">🌍</div>
                <div className="a-card-num">10+</div>
                <div className="a-card-label">Countries Client-Base</div>
              </div>
              <div className="a-card">
                <div className="a-card-icon">☕</div>
                <div className="a-card-num">1k+</div>
                <div className="a-card-label">Coffee Cups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-inner">
          <div className="reveal">
            <div className="eyebrow">Expertise</div>
            <h2 className="section-title">What I <span>Do</span></h2>
            <p className="section-sub">Comprehensive solutions to bring your ideas to life.</p>
          </div>
          <div className="services-grid reveal">
            <div className="svc-card">
              <div className="svc-placeholder">⚡</div>
              <div className="svc-glow"></div>
              <div className="svc-body">
                <span className="svc-label">Frontend Dev</span>
                <div className="svc-arrow">↗</div>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-placeholder">⚙️</div>
              <div className="svc-glow"></div>
              <div className="svc-body">
                <span className="svc-label">Backend API</span>
                <div className="svc-arrow">↗</div>
              </div>
            </div>
            <div className="svc-card">
              <div className="svc-placeholder">🎨</div>
              <div className="svc-glow"></div>
              <div className="svc-body">
                <span className="svc-label">UI/UX Design</span>
                <div className="svc-arrow">↗</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands">
        <div className="brands-track">
          {[...Array(2)].fill([
            "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Spotify", "Twitter"
          ]).flat().map((brand, i) => (
            <div key={i} className="brand-item">{brand}</div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-inner">
          <div className="reveal">
            <div className="eyebrow">Capabilities</div>
            <h2 className="section-title">My <span>Skills</span></h2>
            <p className="section-sub">The technologies and tools I work with every day.</p>
          </div>
          <div className="skills-grid reveal">
            <div className="skill-card">
              <div className="skill-cat">
                <div className="skill-dot" style={{ background: "#1e90ff" }}></div>
                <div className="skill-cat-name">Frontend</div>
              </div>
              <ul className="skill-list">
                <li>
                  <div className="skill-item-label">
                    <span>React & Next.js</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "95%", background: "#1e90ff" }}></div>
                  </div>
                </li>
                <li>
                  <div className="skill-item-label">
                    <span>TypeScript</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "90%", background: "#1e90ff" }}></div>
                  </div>
                </li>
                <li>
                  <div className="skill-item-label">
                    <span>Tailwind CSS</span>
                    <span>98%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "98%", background: "#1e90ff" }}></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-cat">
                <div className="skill-dot" style={{ background: "#00e5ff" }}></div>
                <div className="skill-cat-name">Backend</div>
              </div>
              <ul className="skill-list">
                <li>
                  <div className="skill-item-label">
                    <span>Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "85%", background: "#00e5ff" }}></div>
                  </div>
                </li>
                <li>
                  <div className="skill-item-label">
                    <span>PostgreSQL</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "80%", background: "#00e5ff" }}></div>
                  </div>
                </li>
                <li>
                  <div className="skill-item-label">
                    <span>GraphQL</span>
                    <span>75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "75%", background: "#00e5ff" }}></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-cat">
                <div className="skill-dot" style={{ background: "#00e676" }}></div>
                <div className="skill-cat-name">Tools</div>
              </div>
              <ul className="skill-list">
                <li>
                  <div className="skill-item-label">
                    <span>Git & GitHub</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "95%", background: "#00e676" }}></div>
                  </div>
                </li>
                <li>
                  <div className="skill-item-label">
                    <span>Figma</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "85%", background: "#00e676" }}></div>
                  </div>
                </li>
                <li>
                  <div className="skill-item-label">
                    <span>Docker</span>
                    <span>70%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: "70%", background: "#00e676" }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-inner">
          <div className="reveal">
            <div className="eyebrow">Get In Touch</div>
            <h2 className="section-title">Let&apos;s <span>Connect</span></h2>
            <p className="section-sub">Have a project in mind or just want to chat? Send me a message!</p>
          </div>
          <div className="contact-wrap reveal">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>I&apos;m currently available for freelance work and full-time opportunities. If you think I&apos;d be a good fit for your team, don&apos;t hesitate to reach out.</p>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Dribbble</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" placeholder="Your name" />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="you@example.com" />
              </div>
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: "0.5rem" }}>
                Send Message <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">
          © {new Date().getFullYear()} Ivann. <span>All rights reserved.</span>
        </div>
        <div className="footer-status">
          <div className="status-dot"></div>
          Available for new opportunities
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <a href="#hero" className={`scroll-top ${showScrollTop ? "visible" : ""}`}>
        ↑
      </a>
    </div>
  );
}
