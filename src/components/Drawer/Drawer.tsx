import styles from "./Drawer.module.scss";
import Logo from "../../assets/logo-dark.svg";

interface Props {
  className?: string;
}

const Drawer = ({ className }: Props) => {
  return (
    <aside className={`${styles.drawer} ${className}`}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <h1 className={styles.heading}>ALL BOARDS(1)</h1>
    </aside>
  );
};

export default Drawer;
