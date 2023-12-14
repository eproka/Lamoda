import React from "react";
import "./App.css";

const SearchFilter = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={onSearchTermChange}
        placeholder="Поиск"
      />
    </div>
  );
};

export default  React.memo(SearchFilter);
