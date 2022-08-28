import { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
  size?: "lg" | "sm";
  theme?: "primary" | "secondary" | "danger";
}

const Button = ({
  children,
  onClick,
  className,
  size = "sm",
  theme = "primary",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[`button-${size}`]} ${
        styles[`button-${theme}`]
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
