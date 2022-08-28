import { InputHTMLAttributes } from "react";
import styles from "./TextArea.module.scss";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  chidlren?: string;
  className?: string;
}

const TextArea = ({ className, children }: Props) => {
  return (
    <textarea className={`${styles.textArea} ${className}`}>
      {children}
    </textarea>
  );
};

export default TextArea;
