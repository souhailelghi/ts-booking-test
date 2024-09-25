import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  const baseStyle = 'px-4 py-2 font-semibold rounded-lg focus:outline-none';
  const variantStyles: { [key: string]: string } = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    ghost: 'bg-transparent text-gray-500 hover:text-gray-800',
    outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
  };

  return (
    <button className={`${baseStyle} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};
