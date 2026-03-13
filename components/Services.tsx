import React from 'react';

export default function Services() {
  return (
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
  );
}
