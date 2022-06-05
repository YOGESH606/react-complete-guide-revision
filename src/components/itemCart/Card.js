import { useState } from "react";

const Card = ({ obj, calculateTotalPrice }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    calculateTotalPrice(obj.price);
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity >= 1) {
      calculateTotalPrice(-obj.price);
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <span>{obj.name}</span>
      <button onClick={decreaseQuantity}>-</button>
      <input placeholder="quantity" value={quantity} />
      <button onClick={increaseQuantity}>+</button>
      <span id="item-price">{obj.price}</span>
    </div>
  );
};

export default Card;
