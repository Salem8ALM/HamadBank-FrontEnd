import React from "react";

function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className="flex flex-row w-full text-black">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="border border-gray-300 rounded-md p-2 flex-grow"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 text-white p-2 rounded-md ml-2"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
