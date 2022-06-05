import React, { useState } from "react";
import data from "./data";
import Card from "./Card";

const Home = () => {
  const [totalPrice, setPrice] = useState(0);

  const calculateTotalPrice = (p) => {
    setPrice(totalPrice + p);
  };

  return (
    <div className="container">
      <h3>Total shopping in RS ={totalPrice}</h3>
      <h3>summary</h3>
      {data.map((obj) => (
        <Card obj={obj} calculateTotalPrice={calculateTotalPrice} />
      ))}
    </div>
  );
};

export default Home;
