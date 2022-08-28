import styles from "./Drawer.module.scss";

interface Props {
  className?: string;
}

const Drawer = ({ className }: Props) => {
  return (
    <aside className={`${styles.drawer} ${className}`}>
      <h1>Drawer</h1>
    </aside>
  );
};

export default Drawer;
