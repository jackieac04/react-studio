// TODO: create a component that displays a single bakery item
import React from "react";
import "./bakery.css";

export default function BakeryItem({ item, cart, setCart }) {
  const onClick = () => {
    setCart([...cart, item]);
  };
  return (
    <div className="box">
      <img src={item.image} alt="" />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={onClick}>Add to Cart</button>
    </div>
  );
}
