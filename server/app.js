import express, { json } from "express";
import cors from "cors";
import carRoutes from "./routes/carRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import { connectDB } from "./config/db.js";
import { fetchCars } from "./utils/fetchCars.js";
import path from "path";
import React from "react";
import [ReactDOM]() from "react-dom";

function App() {
  return (
    <div className="App">
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

// Render the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoriteRoutes);

// Fetch cars from API and save to database
fetchCars();

// [Error handling middleware](poe://www.poe.com/_api/key_phrase?phrase=Error%20handling%20middleware&prompt=Tell%20me%20more%20about%20Error%20handling%20middleware.)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Render the [React](poe://www.poe.com/_api/key_phrase?phrase=React&prompt=Tell%20me%20more%20about%20React.) component to the DOM
ReactDOM.render(React.createElement(App), document.getElementById("root"));