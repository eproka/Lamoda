import React from "react";
import "./App.css";

const PriceRangeFilter = ({ priceRange, onPriceRangeChange }) => {
  const handlePriceMinChange = (event) => {
    const min = event.target.value;
    onPriceRangeChange({ ...priceRange, min });
  };

  const handlePriceMaxChange = (event) => {
    const max = event.target.value;
    onPriceRangeChange({ ...priceRange, max });
  };

  return (
    <div>
      <div id="price-range-filter-head">
        <label>По цене</label>
      </div>
      <div id="price-range-filter-container">
        <input
          type="text"
          id="minPrice"
          className="price-range-inputs"
          value={priceRange.min}
          onChange={handlePriceMinChange}
          placeholder="От"
        />
        <input
          type="text"
          id="maxPrice"
          className="price-range-inputs"
          value={priceRange.max}
          onChange={handlePriceMaxChange}
          placeholder="До"
        />
      </div>
    </div>
  );
};

export default  React.memo(PriceRangeFilter);
