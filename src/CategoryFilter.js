import React from "react";
import "./App.css";

const CategoryFilter = ({ selectedCategories, onCategoryChange }) => {
  return (
    <div>
      <div id="category-filter-head">
        <label>По категории</label>
      </div>

      <div id="category-filter-container">
        <label>
          <input
            type="checkbox"
            value="туфли"
            checked={selectedCategories.includes("туфли")}
            onChange={onCategoryChange}
          />{" "}
          Туфли
        </label>
        <label>
          <input
            type="checkbox"
            value="джинсы"
            checked={selectedCategories.includes("джинсы")}
            onChange={onCategoryChange}
          />{" "}
          Джинсы
        </label>
        <label>
          <input
            type="checkbox"
            value="байки"
            checked={selectedCategories.includes("байки")}
            onChange={onCategoryChange}
          />{" "}
          Байки
        </label>
        <label>
          <input
            type="checkbox"
            value="худи"
            checked={selectedCategories.includes("худи")}
            onChange={onCategoryChange}
          />{" "}
          Худи
        </label>
        <label>
          <input
            type="checkbox"
            value="кофты"
            checked={selectedCategories.includes("кофты")}
            onChange={onCategoryChange}
          />{" "}
          Кофта
        </label>
        <label>
          <input
            type="checkbox"
            value="кеды"
            checked={selectedCategories.includes("кеды")}
            onChange={onCategoryChange}
          />{" "}
          Кеды
        </label>
      </div>
    </div>
  );
};

export default  React.memo(CategoryFilter);
