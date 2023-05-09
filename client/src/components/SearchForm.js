// src/components/SearchForm.js
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search for a car"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
