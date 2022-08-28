import { ReactNode } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.scss";

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  if (!window) return null;

  return ReactDom.createPortal(
    <div className={styles.modal}>{children}</div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
