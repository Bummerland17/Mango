import React from "react";

interface Props {
  children: string;
  color: string;
  onClick: () => void;
  display: string;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-outline" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
