import styles from "./Circle.module.scss";

interface Props {
  backgroundColor: string;
}

const Circle = ({ backgroundColor }: Props) => {
  return (
    <span
      className={styles.circle}
      style={{ backgroundColor: backgroundColor }}
    ></span>
  );
};

export default Circle;
