import React from 'react';

export default function TechLogos() {
  return (
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
  );
}
