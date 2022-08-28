import { MouseEventHandler, ReactNode } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.scss";
import CrossIcon from "../../assets/icon-cross.svg";

interface Props {
  children: ReactNode;
  onClose: MouseEventHandler;
}

const Modal = ({ children, onClose }: Props) => {
  if (!window) return null;

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.content}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          <img src={CrossIcon} alt="close modal" />
        </button>
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
