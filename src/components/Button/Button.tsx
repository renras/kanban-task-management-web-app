import { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
  size?: "lg" | "sm";
}

const Button = ({ children, onClick, className, size = "sm" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[`button-${size}`]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
