import React from "react";
import "./shop-button.css";

type ShopButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ShopButton(props: ShopButtonProps) {
  return (

      <button {...props} className="shop-button">
        {props.children}
      </button>
    
  );
}