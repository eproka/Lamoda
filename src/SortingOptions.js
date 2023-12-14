import React, { useState } from "react";
import "./App.css";

const SortingOptions = ({ onSortChange, defaultOption }) => {
  const [sortOption, setSortOption] = useState(defaultOption);

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    onSortChange(newSortOption);
  };

  return (
    <div className="sorting-options">
      <div>
        <label>
          <input
            type="radio"
            value="priceAsc"
            name="sortOption"
            checked={sortOption === "priceAsc"}
            onChange={handleSortChange}
          />{" "}
          Сначала дешевые (по возрастанию цены)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="priceDesc"
            name="sortOption"
            checked={sortOption === "priceDesc"}
            onChange={handleSortChange}
          />{" "}
          Сначала дорогие (по убыванию цены)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="ratingDesc"
            name="sortOption"
            checked={sortOption === "ratingDesc"}
            onChange={handleSortChange}
          />{" "}
          Сначала популярные (по убыванию рейтинга)
        </label>
      </div>
    </div>
  );
};

export default  React.memo(SortingOptions);
