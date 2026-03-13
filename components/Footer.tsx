import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        © {new Date().getFullYear()} Joel. <span>All rights reserved.</span>
      </div>
      <div className="footer-status">
        <div className="status-dot"></div>
        Available for new opportunities
      </div>
    </footer>
  );
}
