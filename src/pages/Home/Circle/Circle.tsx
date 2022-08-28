import styles from "./Circle.module.scss";

interface Props {
  backgroundColor: string;
}

const Circle = ({ backgroundColor }: Props) => {
  return (
    <div
      className={styles.circle}
      style={{ backgroundColor: backgroundColor }}
    ></div>
  );
};

export default Circle;
