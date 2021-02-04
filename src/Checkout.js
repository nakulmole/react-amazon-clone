import React from "react";
import "./Checkout.css";
import ad_logo from "./banner_ad_checkout.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={ad_logo} alt="checkout ad" />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title"> Your Shopping Basket </h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              //mrp={item.mrp}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/*Checkout Items*/}
          {/*Checkout Items*/}
          {/*Checkout Items*/}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
