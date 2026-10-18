
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input 
      className={`w-full bg-brand-gray border-b border-white/20 px-4 py-4 focus:outline-none focus:border-brand-red transition-colors font-sans text-brand-white ${className}`}
      {...props}
    />
  );
};

export default Input;
