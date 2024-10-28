"use client";
// src/components/Transactions.js
import { useEffect, useState } from "react";
import { myTransactions } from "@/api/actions/auth";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import DateRangePicker from "./DateRangePicker";
import TransactionList from "./TransactionList";

{
  /* Contanier of the Transactions(search-date-filtertype-)*/
}
function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const data = await myTransactions();
        setTransactions(data);
        setFilteredTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    }
    fetchTransactions();
  }, []);

  const handleSearch = () => {
    let filtered = transactions;

    if (search) {
      filtered = filtered.filter((transaction) =>
        transaction.type.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterType !== "all") {
      filtered = filtered.filter(
        (transaction) => transaction.type === filterType
      );
    }

    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      filtered = filtered.filter((transaction) => {
        const date = new Date(transaction.createdAt);
        return date >= from && date <= to;
      });
    }

    setFilteredTransactions(filtered);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full py-8 px-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black-700">
          Transactions
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <SearchBar
              search={search}
              setSearch={setSearch}
              handleSearch={handleSearch}
            />
            <FilterOptions
              filterType={filterType}
              setFilterType={setFilterType}
            />
          </div>
          <div className="flex gap-4">
            <DateRangePicker
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
            />
          </div>
        </div>
        <div className="flex justify-between p-0 font-bold text-black ">
          <h2>Amount</h2>
          <h2>Date</h2>
          <h2>Type</h2>
        </div>
        <TransactionList transactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default Transactions;
