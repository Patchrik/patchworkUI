import React from "react";
import "../Button/button.css";

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;
