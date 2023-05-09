// /client/src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Compare from "./pages/Compare";
import CarDetails from "./pages/CarDetails";
import LandingPage from "./pages/LandingPage";
import { UserProvider } from "./components/context/userContext"; // Import the UserProvider

const App = () => {
  return (
    <Router>
      <div>
        <UserProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/car/:id" element={<CarDetails />} />
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
};

export default App;
