// /client/src/components/filter/Filter.js
import React from "react";
import FilterForm from "./FilterForm";

const Filter = ({ onFilter }) => {
  return (
    <div>
      <h2>Filter Cars</h2>
      <FilterForm onFilter={onFilter} />
    </div>
  );
};

export default Filter;
