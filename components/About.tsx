import React from 'react';

export default function About() {
  return (
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
  );
}
