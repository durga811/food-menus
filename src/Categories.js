import React from "react";

const Categories = ({ updateCategory }) => {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => {
          updateCategory("all");
        }}
      >
        All
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          updateCategory("Breakfast");
        }}
      >
        Breakfast
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          updateCategory("Lunch");
        }}
      >
        Lunch
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          updateCategory("Shakes");
        }}
      >
        Shakes
      </button>
    </div>
  );
};

export default Categories;
