import React from "react";

function DateRangePicker({ fromDate, setFromDate, toDate, setToDate }) {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
      <div className="flex flex-col items-start">
        <label htmlFor="fromDate" className="text-black-600 text-sm mb-1">
          From
        </label>
        <input
          id="fromDate"
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="text-black border border-black-300 rounded-md p-2"
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="toDate" className="text-black-600 text-sm mb-1">
          To
        </label>
        <input
          id="toDate"
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="text-black border border-gray-300 rounded-md p-2"
        />
      </div>
    </div>
  );
}

export default DateRangePicker;
