import React from "react";
import "./styles.css";

function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <button {...rest}>{children}</button>
    </div>
  );
}

export default Button;
