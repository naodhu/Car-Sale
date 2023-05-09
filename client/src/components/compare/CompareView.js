import React, { useState, useEffect, useCallback } from "react";
import CompareItem from "./CompareItem";

const CompareView = ({ cars }) => {
  const [sortedCars, setSortedCars] = useState([]);

  const compareCars = useCallback(
    (comparisonType) => {
      const sorted = [...cars].sort((carA, carB) => {
        const compareItemA = new CompareItem(carA);
        const compareItemB = new CompareItem(carB);

        switch (comparisonType) {
          case "Category":
            return compareItemA.compareCategory(compareItemB);
          case "Make":
            return compareItemA.compareMake(compareItemB);
          case "Model":
            return compareItemA.compareModel(compareItemB);
          case "Year":
            return compareItemA.compareYear(compareItemB);
          default:
            return 0;
        }
      });

      setSortedCars(sorted);
    },
    [cars]
  );

  useEffect(() => {
    compareCars("Category");
  }, [cars, compareCars]);

  return (
    <div>
      <div>
        <button onClick={() => compareCars("Category")}>
          Sort by Category
        </button>
        <button onClick={() => compareCars("Make")}>Sort by Make</button>
        <button onClick={() => compareCars("Model")}>Sort by Model</button>
        <button onClick={() => compareCars("Year")}>Sort by Year</button>
      </div>
      <div>
        {sortedCars.map((car) => (
          <div key={car._id.$oid}>
            <p>Category: {car.Category}</p>
            <p>Make: {car.Make}</p>
            <p>Model: {car.Model}</p>
            <p>Year: {car.Year.$numberInt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareView;
