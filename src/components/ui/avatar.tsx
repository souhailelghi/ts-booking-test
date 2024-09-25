import { ImgHTMLAttributes, ReactNode } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const Avatar = ({ src, alt, fallback = 'N/A', ...props }: AvatarProps) => {
  return (
    <div className="flex items-center space-x-2">
      {src ? (
        <img
          className="inline-block h-10 w-10 rounded-full object-cover"
          src={src}
          alt={alt}
          {...props}
        />
      ) : (
        <div className="inline-block h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
          {fallback}
        </div>
      )}
    </div>
  );
};

export const AvatarFallback = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-block h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
      {children}
    </div>
  );
};
