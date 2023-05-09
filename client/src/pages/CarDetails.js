import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCars } from "../services/carService";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    getCars(id).then((carData) => setCar(carData));
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{car.name}</h1>
      <p>Price: {car.price}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarDetails;
