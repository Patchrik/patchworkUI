import React from "react";
import "../Button/button.css";

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: "notion" | "MUI" | "Ant" | "Bootstrap" | "patchwork";
  color?: "primary" | "secondary" | "success" | "error" | "warning";
}
const Button = ({
  onClick,
  label,
  variant = "patchwork",
  color = "primary",
}: ButtonProps) => {
  return (
    <button className={variant} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
