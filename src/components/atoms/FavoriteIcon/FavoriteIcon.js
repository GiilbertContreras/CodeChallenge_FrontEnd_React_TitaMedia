// export default function FavoriteIcon({ isActive, onClick }) {
//   return (
//     <span className={`favorite ${isActive ? 'active' : ''}`} onClick={onClick} >
//       ★
//     </span>
//   );
// }


import React from 'react';

export default function IconStar({ size = 20, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}