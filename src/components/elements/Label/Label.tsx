import { ReactNode, LabelHTMLAttributes } from "react";
import styles from "./Label.module.scss";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

const Label = ({ children, className }: Props) => {
  return <label className={`${styles.label} ${className}`}>{children}</label>;
};

export default Label;
