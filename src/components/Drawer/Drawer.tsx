import styles from "./Drawer.module.scss";
import LogoIcon from "../../assets/logo-dark.svg";
import BoardIcon from "../../assets/icon-board-light.svg";

interface Props {
  className?: string;
}

const Drawer = ({ className }: Props) => {
  return (
    <aside className={`${styles.drawer} ${className}`}>
      <img src={LogoIcon} alt="logo" className={styles.logo} />
      <h1 className={styles.heading}>ALL BOARDS(1)</h1>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          <img src={BoardIcon} alt="board icon" />
          <p>Platform Launch</p>
        </a>
      </nav>
    </aside>
  );
};

export default Drawer;
