import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((SubCategory, index) => {
        return (
          <button
            type="button"
            className="btn filter-btn"
            key={index}
            onClick={() => filterItems(SubCategory)}
          >
            {SubCategory}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
