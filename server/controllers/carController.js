import Car from "../models/Car.js";

// Get all cars or search for cars
export const getCars = async (req, res) => {
  try {
    const { searchTerm, ...filters } = req.query;

    // Build the query object based on the filters and search term
    let query = {};
    for (const key in filters) {
      if (filters[key]) {
        query[key] = filters[key];
      }
    }

    if (searchTerm) {
      const numericSearchTerm = parseInt(searchTerm, 10);
      const yearCondition = isNaN(numericSearchTerm)
        ? []
        : [{ Year: numericSearchTerm }];

      query.$or = [
        { Make: { $regex: searchTerm, $options: "i" } },
        { Model: { $regex: searchTerm, $options: "i" } },
        ...yearCondition,
      ];
    }

    const cars = await Car.find(query);
    res.status(200).json({ cars });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching cars", error });
  }
};

// Get a car by ID
export const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  res.status(200).json({ car });
};

// Create a new car
export const createCar = async (req, res) => {
  const { objectId, Category, Make, Model, Year } = req.body;

  const existingCar = await Car.findOne({ objectId });
  if (existingCar) {
    return res.status(400).json({ message: "Car already exists" });
  }

  const newCar = new Car({
    objectId,
    Category,
    Make,
    Model,
    Year,
  });

  await newCar.save();

  res.status(201).json({ car: newCar });
};

// Update a car
export const updateCar = async (req, res) => {
  const { objectId, Category, Make, Model, Year } = req.body;

  const car = await Car.findById(req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  car.objectId = objectId;
  car.Category = Category;
  car.Make = Make;
  car.Model = Model;
  car.Year = Year;

  await car.save();

  res.status(200).json({ car });
};

// Delete a car
export const deleteCar = async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  await car.remove();

  res.status(200).json({ message: "Car deleted successfully" });
};
