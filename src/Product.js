import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, mrp, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__mrp">
          <small>MRP.: </small>
          <small>₹ </small>
          <small>
            <s>{mrp}</s>
          </small>
        </p>

        <p className="product__price">
          <small>Deal of The Day: </small>
          <small>₹ </small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
          <p className="product__rating"> {rating}</p>
        </div>
      </div>

      <img src={image} alt="product" />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
