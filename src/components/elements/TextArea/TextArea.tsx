import { InputHTMLAttributes } from "react";
import styles from "./TextArea.module.scss";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  chidlren?: string;
  className?: string;
}

const TextArea = ({ className, children }: Props) => {
  return (
    <TextArea className={`${styles.TextArea} ${className}`}>
      {children}
    </TextArea>
  );
};

export default TextArea;
