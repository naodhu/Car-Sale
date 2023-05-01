import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    // Implement your login logic here
    setIsLoggedIn(true);
  }

  function handleLogout() {
    // Implement your logout logic here
    setIsLoggedIn(false);
  }

  return (
    <div>
      <header>
        <h1>Car Sale</h1>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">Cars</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>
      <main>
        <WelcomeMessage />
        <Inventory isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      </main>
      <footer>
        <p>&copy; 2023 Car Sale</p>
      </footer>
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div>
      <h2>Welcome to Car Sale!</h2>
      <p>
        We offer a wide selection of high-quality cars at competitive prices.
        Browse our inventory and find the perfect car for you today!
      </p>
    </div>
  );
}

function Inventory(props) {
  if (props.isLoggedIn) {
    return (
      <div className="centered">
        <h2>Our Inventory</h2>
        <ul className="car-list">
          <li>
            <a href="#">
              <CarListing
                make="Toyota"
                model="Corolla"
                year="2018"
                imageUrl="https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Toyota+Corolla"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <CarListing
                make="Honda"
                model="Civic"
                year="2019"
                imageUrl="https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Honda+Civic"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <CarListing
                make="Ford"
                model="F-150"
                year="2020"
                imageUrl="https://via.placeholder.com/300x200/F44336/FFFFFF?text=Ford+F-150"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Please <a href="#" onClick={props.onLogin}>login</a> to view our inventory.
          Don't have a login?{" "}
          <a href="/register">Register here</a>
          .
        </p>
      </div>
    );
  }
}

function CarListing(props) {
  return (
    <div className="car-listing">
      <img src={props.imageUrl} alt={`${props.make} ${props.model}`} />
      <div className="car-details">
        <h3>
          {props.make} {props.model}
        </h3>
        <p>{props.year}</p>
      </div>
    </div>
  );
}

export default App;