import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Filters from "./Filters";
import SortingOptions from "./SortingOptions";
import { generateRandomProducts } from "./productGenerator";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortOption, setSortOption] = useState("ratingDesc");

  useEffect(() => {
    // Generate random products
    const generatedProducts = generateRandomProducts(20);
    setProducts(generatedProducts);
    setFilteredProducts(generatedProducts);
  }, []);

  useEffect(() => {
    // Filter products when filters change
    const filtered = products.filter((product) => {
      const nameMatch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const colorMatch =
        selectedColors.length === 0 || selectedColors.includes(product.color);
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const priceMatch =
        (priceRange.min === "" || product.price >= Number(priceRange.min)) &&
        (priceRange.max === "" || product.price <= Number(priceRange.max));
      return nameMatch && colorMatch && categoryMatch && priceMatch;
    });

    // Sort products if a sort option is selected
    let sorted = [...filtered];
    if (sortOption === "priceAsc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "ratingDesc") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(sorted);
  }, [
    products,
    searchTerm,
    selectedColors,
    selectedCategories,
    priceRange,
    sortOption,
  ]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors((prevColors) => {
      if (prevColors.includes(color)) {
        return prevColors.filter((c) => c !== color);
      } else {
        return [...prevColors, color];
      }
    });
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
  };

  return (
    <div class="container">
      <h1>Lamoda</h1>
      <SortingOptions
        onSortChange={handleSortChange}
        defaultOption={sortOption}
      />
      <Filters
        searchTerm={searchTerm}
        selectedColors={selectedColors}
        selectedCategories={selectedCategories}
        priceRange={priceRange}
        onSearchTermChange={handleSearchTermChange}
        onColorChange={handleColorChange}
        onCategoryChange={handleCategoryChange}
        onPriceRangeChange={handlePriceRangeChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default  React.memo(App);
