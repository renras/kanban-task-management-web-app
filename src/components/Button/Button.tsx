import { ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
}

const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
