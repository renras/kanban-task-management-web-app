import styles from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...inputProps }: Props) => {
  return <input className={styles.input} {...inputProps} />;
};

export default Input;
