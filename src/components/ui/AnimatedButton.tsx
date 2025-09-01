import React from 'react';
import { Button } from 'react-bootstrap';
import type {ButtonProps} from 'react-bootstrap/Button';

interface AnimatedButtonProps extends ButtonProps {
  className?: string;
  wrapperClassName?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
    className,
  ...buttonProps
}) => {
  return (
    <div className={"btn-wrapper " + className}>
      <Button {...buttonProps}>
        {children}
      </Button>
    </div>
  );
};

export default AnimatedButton;
