import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  const baseStyle = 'px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300';
  return <input className={`${baseStyle} ${className}`} {...props} />;
};
