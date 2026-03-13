import React from 'react';

export default function Hero() {
  return (
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
          <span className="line2">JOEL</span>
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
           src="/file_000000005fb471f4b0b90a1b61b2e445 (1).png"
            className="hero-img" 
            alt="Joel" 
          />
          {/* Floating badges */}
          <div className="badge badge-b1">
            <span className="badge-icon">⚡</span>
            <div>
              <span className="badge-val">Next.js</span>
              <span className="badge-label">Expert</span>
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
  );
}
