// Filters.js

import React from "react";
import SearchFilter from "./SearchFilter";
import ColorFilter from "./ColorFilter";
import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import "./App.css";

const Filters = ({
  searchTerm,
  selectedColors,
  selectedCategories,
  priceRange,
  onSearchTermChange,
  onColorChange,
  onCategoryChange,
  onPriceRangeChange,
}) => {
  return (
    <div className="filters">
      <SearchFilter
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
      />
      <div className="filter-group">
        <ColorFilter
          selectedColors={selectedColors}
          onColorChange={onColorChange}
        />
        <CategoryFilter
          selectedCategories={selectedCategories}
          onCategoryChange={onCategoryChange}
        />
        <PriceRangeFilter
          priceRange={priceRange}
          onPriceRangeChange={onPriceRangeChange}
        />
      </div>
    </div>
  );
};

export default  React.memo(Filters);
