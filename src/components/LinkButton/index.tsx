import React from "react";
import "./styles.css";

function LinkButton({
  children,
  ...rest
}: React.LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <div>
      <a {...rest}>{children}</a>
    </div>
  );
}

export default LinkButton;
