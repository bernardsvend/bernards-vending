import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <img
      src="/logo.jpg"
      alt="Bernard's Vending Logo"
      className={className}
    />
  );
};
