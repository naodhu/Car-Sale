// /client/src/pages/Compare.js
import React, { useState, useEffect } from "react";
import { getCars } from "../services/carService";
import CompareView from "../components/compare/CompareView"; // Import CompareView
import "../App.css";

const Compare = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const fetchedCars = await getCars();
      setCars(fetchedCars);
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Compare Cars</h1>
      <div className="compare-container">
        <CompareView cars={cars} />{" "}
        {/* Use CompareView instead of CompareItem */}
      </div>
    </div>
  );
};

export default Compare;
