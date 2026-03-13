"use client";

import React from 'react';

export default function Contact() {
  return (
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
              <a href="https://x.com/home" className="social-link" target='_blank'>Twitter</a>
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
  );
}
