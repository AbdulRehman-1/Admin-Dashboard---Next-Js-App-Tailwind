import React, { FC } from 'react';

interface ButtonProps {
  variant: String;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant, children }) => {
  return <button>{children}</button>;
};

export default Button;
