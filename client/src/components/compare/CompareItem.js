import React from "react";

const CompareItem = ({ car }) => {
  return (
    <div>
      <h3>{car.name}</h3>
      <p>Price: {car.price}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CompareItem;
