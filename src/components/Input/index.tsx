import React from "react";
import "./styles.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className="input-content">
      <div className="input-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <input className="input-full-width" type="text" {...rest} id={id} />
    </div>
  );
}

export default Input;
