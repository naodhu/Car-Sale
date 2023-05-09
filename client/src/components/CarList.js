import React, { useState, useEffect } from 'react';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch the cars data and update the state
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map(car => (
          <div key={car.id}>
            <div className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden">
              <img src={car.image} className="w-full h-48 object-cover" alt={car.make} />
              <div className="p-4">
                <h5 className="text-lg font-semibold">{car.make} {car.model}</h5>
                <p className="text-gray-500">{car.year}</p>
                <button className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
