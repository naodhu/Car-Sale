import React from "react";
import CompareView from "../components/compare/CompareView";

const Compare = () => {
  // Replace with actual cars to compare from the state
  const carsToCompare = [];

  return (
    <div>
      <h1>Compare Cars</h1>
      <CompareView carsToCompare={carsToCompare} />
    </div>
  );
};

export default Compare;
