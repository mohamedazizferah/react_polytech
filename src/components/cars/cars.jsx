import React, { useState } from "react";

const Cars = () => {
  const [car, setCar] = useState({
    brand: "ford",
    modle: "mustang",
    color: "red",
    year: 1964,
  });

  const changeColor = () => {
    setCar((car) => ({ ...car, color: "blue" }));
  };
  return (
    <div>
      <h1>my {car.brand}</h1>
      <p>
        it is a {car.color} {car.modle} from {car.year}
      </p>
      <button type="button" onClick={changeColor}>
        change color
      </button>
    </div>
  );
};
export default Cars;
