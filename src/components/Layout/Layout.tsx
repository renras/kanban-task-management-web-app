import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import Button from "../Button/Button";
import MenuIcon from "../../assets/icon-vertical-ellipsis.svg";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.heading}>Platform Launch</h1>
        <Button onClick={() => console.log("Clicked")}>+ Add New Task</Button>
        <button className={styles.menu}>
          <img src={MenuIcon} alt="menu" />
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
