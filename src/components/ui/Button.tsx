import React, {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 rounded-full';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] border border-[#333]',
    outline: 'border border-gray-600 bg-transparent hover:bg-gray-800 text-white',
    ghost: 'hover:bg-gray-800 text-gray-300 hover:text-white bg-transparent',
  };

  const sizes = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-10 px-6 py-2 text-sm',
    lg: 'h-12 px-8 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
