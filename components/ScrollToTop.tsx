import React from 'react';

export default function ScrollToTop({ show }: { show: boolean }) {
  return (
    <a href="#hero" className={`scroll-top ${show ? "visible" : ""}`}>
      ↑
    </a>
  );
}
