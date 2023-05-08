import express, { json } from "express";
import cors from "cors";
import carRoutes from "./routes/carRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import { connectDB } from "./config/db.js";
import { fetchCars } from "./utils/fetchCars.js";
import React from "react";

function App() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(json());

app.use(cors());


// Routes
app.use("/api/cars", carRoutes);
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoriteRoutes);

// Fetch cars from API and save to database
fetchCars();

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


<<<<<<< Updated upstream
=======
//nosecrete

// front end
import React from "react";
import "./App.css";

function App() {
  return
/* <div className="App">
      <h1>Hello, world!</h1>
    </div> */
}

>>>>>>> Stashed changes
export default App;
//nosecrete