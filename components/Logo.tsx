import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-16 w-auto" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500" 
      className={className} 
      aria-label="Bernard's Vending Logo"
    >
      {/* Red Background */}
      <rect width="500" height="500" fill="#dc2626" rx="40" />
      
      {/* Vending Machine Icon */}
      <g transform="translate(140, 40)">
        <rect x="0" y="0" width="220" height="280" fill="none" stroke="white" strokeWidth="14" rx="8" />
        {/* Inner Window */}
        <rect x="25" y="25" width="170" height="160" fill="none" stroke="white" strokeWidth="8" />
        {/* Shelves */}
        <line x1="25" y1="80" x2="195" y2="80" stroke="white" strokeWidth="5" />
        <line x1="25" y1="130" x2="195" y2="130" stroke="white" strokeWidth="5" />
        
        {/* Keypad */}
        <rect x="200" y="40" width="15" height="40" fill="white" />
        
        {/* Dispenser Slot */}
        <rect x="25" y="210" width="170" height="50" fill="white" opacity="0.5" />
        
        {/* Legs */}
        <rect x="15" y="280" width="20" height="20" fill="white" />
        <rect x="185" y="280" width="20" height="20" fill="white" />
      </g>

      {/* Ribbon Banner */}
      <g transform="translate(0, 310)">
         <path d="M-10,20 L510,20 L480,90 L510,160 L-10,160 L20,90 Z" fill="white" />
         <text x="250" y="115" textAnchor="middle" fill="#dc2626" style={{fontFamily: 'sans-serif', fontWeight: 900, fontSize: '65px'}}>Bernard's</text>
         <text x="250" y="225" textAnchor="middle" fill="white" style={{fontSize: '50px', fontFamily: 'sans-serif', fontWeight: 'bold'}}>Vending</text>
      </g>
    </svg>
  );
};