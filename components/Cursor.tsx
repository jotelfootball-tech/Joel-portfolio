import React from 'react';

export default function Cursor({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="cursor"
      style={{ left: `${x}px`, top: `${y}px` }}
    ></div>
  );
}
