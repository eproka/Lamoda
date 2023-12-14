import React from "react";
import "./App.css";

const ColorFilter = ({ selectedColors, onColorChange }) => {
  return (
    <div>
      <div id="color-filter-head">
        <label>По цвету</label>
      </div>
      <div id="color-filter-container">
        <label>
          <input
            type="checkbox"
            value="красный"
            checked={selectedColors.includes("красный")}
            onChange={onColorChange}
          />{" "}
          Красный
        </label>
        <label>
          <input
            type="checkbox"
            value="синий"
            checked={selectedColors.includes("синий")}
            onChange={onColorChange}
          />{" "}
          Синий
        </label>
        <label>
          <input
            type="checkbox"
            value="зеленый"
            checked={selectedColors.includes("зеленый")}
            onChange={onColorChange}
          />{" "}
          Зеленый
        </label>
        <label>
          <input
            type="checkbox"
            value="черный"
            checked={selectedColors.includes("черный")}
            onChange={onColorChange}
          />{" "}
          Черный
        </label>
        <label>
          <input
            type="checkbox"
            value="белый"
            checked={selectedColors.includes("белый")}
            onChange={onColorChange}
          />{" "}
          Белый
        </label>
      </div>
    </div>
  );
};

export default  React.memo(ColorFilter);
