import { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
  fluid?: boolean;
  size?: "lg" | "sm";
  theme?: "primary" | "secondary" | "danger";
}

const Button = ({
  children,
  onClick,
  className,
  size = "sm",
  theme = "primary",
  fluid,
}: Props) => {
  const fluidStyle = fluid ? styles.fluid : "";

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[`button-${size}`]} ${
        styles[`button-${theme}`]
      } ${className} ${fluidStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
