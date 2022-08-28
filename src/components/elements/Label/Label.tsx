import { ReactNode } from "react";
import styles from "./Label.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
}

const Label = ({ children, className, htmlFor }: Props) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {children}
    </label>
  );
};

export default Label;
