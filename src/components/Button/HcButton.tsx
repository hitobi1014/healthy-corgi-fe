import '@/components/Button/HcButton.scss';
import React from 'react';

interface HcButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'tag';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const HcButton: React.FC<HcButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default HcButton;
