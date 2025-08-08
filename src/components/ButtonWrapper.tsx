import React from 'react';
import { Button } from 'react-bootstrap';
import type {ButtonProps} from 'react-bootstrap/Button';

interface ButtonWrapperProps extends ButtonProps {
  className?: string;
  wrapperClassName?: string;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
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

export default ButtonWrapper;