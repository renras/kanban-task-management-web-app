import { useState, ReactNode } from "react";
import styles from "./Layout.module.scss";
import Button from "../elements/Button/Button";
import MenuIcon from "../../assets/icon-vertical-ellipsis.svg";
import Modal from "../Modal/Modal";
import AddTask from "../AddTask/AddTask";
import Drawer from "../Drawer/Drawer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isAddingTask, setIsAddingTask] = useState(false);

  return (
    <div className={styles.container}>
      <Drawer className={styles.drawer} />
      <header className={styles.header}>
        <h1 className={styles.heading}>Platform Launch</h1>
        <Button onClick={() => setIsAddingTask(true)}>+ Add New Task</Button>
        <button className={styles.menu}>
          <img src={MenuIcon} alt="menu" />
        </button>
      </header>
      <main className={styles.main}>{children}</main>
      {isAddingTask && (
        <Modal onClose={() => setIsAddingTask(false)}>
          <AddTask />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
