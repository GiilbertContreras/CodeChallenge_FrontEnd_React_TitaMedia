import React from 'react';

export default function IconStar({
  size = 20,
  className = '',
  stroke = 'currentColor',
  fill = 'none',
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth="2"
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}