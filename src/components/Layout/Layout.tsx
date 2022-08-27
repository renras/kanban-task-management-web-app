import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header className={styles.header}>Header</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
