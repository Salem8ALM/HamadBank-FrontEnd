import React from "react";

function FilterOptions({ filterType, setFilterType }) {
  return (
    <div className="flex items-center text-black space-x-4 mt-4 md:mt-0">
      {["all", "deposit", "withdraw", "transfer"].map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="filterType"
            value={type}
            checked={filterType === type}
            onChange={(e) => setFilterType(e.target.value)}
            className="mr-1"
          />
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </label>
      ))}
    </div>
  );
}

export default FilterOptions;
