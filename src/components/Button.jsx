import React from "react";

import classNames from "classnames";

const Button = ({ className, outline, onClick, children }) => {
  return (
    <button
      className={classNames("button", className, {
        "buttton--outline": outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
