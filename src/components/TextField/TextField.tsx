import React from "react";
import "../TextField/textField.css";

interface TextFieldProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: "notion" | "MUI" | "Ant" | "bootstrap" | "patchwork";
}

const TextField = ({
  label,
  onChange,
  variant = "patchwork",
  placeholder,
}: TextFieldProps) => {
  return (
    <div className={`textfield--${variant}`}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
