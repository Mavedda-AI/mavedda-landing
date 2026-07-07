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
  const baseStyles = 'btn rounded-full';
  
  const variants = {
    primary: 'btn-neutral bg-white text-black hover:bg-gray-200 border-none', // Override for specific design
    secondary: 'btn-outline border-[#333] text-white hover:bg-[#2a2a2a] hover:border-[#444]',
    outline: 'btn-outline border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500',
    ghost: 'btn-ghost text-gray-300 hover:text-white',
  };

  const sizes = {
    sm: 'btn-sm text-xs',
    md: 'btn-md text-sm',
    lg: 'btn-lg text-base min-h-[3rem] h-12',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
