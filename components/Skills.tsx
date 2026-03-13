import React from 'react';

export default function Skills() {
  return (
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
  );
}
