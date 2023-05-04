import React from "react";
import SearchForm from "../components/search/SearchForm";

const Home = () => {
  const handleSearch = (searchTerm) => {
    console.log("Search for:", searchTerm);
  };

  return (
    <div>
      <h1>Welcome to the Car Comparison App</h1>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default Home;
