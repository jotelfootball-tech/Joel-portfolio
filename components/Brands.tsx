import React from 'react';

export default function Brands() {
  return (
    <section id="brands">
      <div className="brands-track">
        {[...Array(2)].fill([
          "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Spotify", "Twitter"
        ]).flat().map((brand, i) => (
          <div key={i} className="brand-item">{brand}</div>
        ))}
      </div>
    </section>
  );
}
