import React from "react";
import CompareItem from "./CompareItem";

const CompareView = ({ carsToCompare }) => {
  return (
    <div>
      {carsToCompare.map((car) => (
        <CompareItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CompareView;
