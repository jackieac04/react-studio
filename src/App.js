import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import React from "react";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmnt = () => {
      let totalval = 0;
      cart.map(
        (item) => (totalval += item.price)
        // replace with BakeryItem component
      );
      return totalval;
    };
    const val = totalAmnt();
    setTotal(val);
  }, [cart]);

  return (
    <div className="App">
      <div className="bakery">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="bakerycontainer">
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <div key={index} className="container">
                <BakeryItem item={item} cart={cart} setCart={setCart} />
              </div>
              // replace with BakeryItem component
            )
          )}
        </div>
      </div>

      <div className="cart">
        <div className="title">
          <h2>Cart</h2> <p>Total = ${total}</p>
        </div>

        {/* <p>{console.log(cart)}</p> */}
        {cart.length > 0 &&
          cart.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <div key={index} className="container">
                <h1>{item.name}</h1> <p>${item.price}</p>
              </div>
              // replace with BakeryItem component
            )
          )}
      </div>
    </div>
  );
}

export default App;
