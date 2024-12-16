import React from "react";

const Button = ({ TagName="button", secondary, children, className="", ...props }) => {
  return (
    <button
      className={`${className} ${secondary ? "bg-white text-gray-700" : "bg-primary"}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
