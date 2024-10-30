"use client";
import React, { useEffect, useState } from "react";
import { myTransactions } from "@/api/actions/auth";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import DateRangePicker from "./DateRangePicker";
import TransactionList from "./TransactionList";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart"), {
  ssr: false,
});
const TransactionLoader = dynamic(() => import("./TransactionLoader"), {
  ssr: false,
});

function Transactions({ user }) {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      const data = await myTransactions();
      setTransactions(data);
      setFilteredTransactions(data);
    }
    fetchTransactions();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSearch = () => {
    let filtered = transactions;
    if (search) {
      filtered = filtered.filter(
        (transaction) =>
          transaction.type.toLowerCase().includes(search.toLowerCase()) ||
          transaction.amount.toString().includes(search)
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
    <div className="flex flex-col md:flex-row">
      {/*Chart Section */}
      <div className="md:w-2/3 md:p-14 justify-center m-auto mt-4 md:m-0 md:mt-0">
        <div className="bg-white shadow-md rounded-lg pt-6 md:p-6">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6">
              Financial Distribution
            </h1>
            {loading ? "" : <Chart data={filteredTransactions} />}
          </div>
        </div>
      </div>

      {/*Transaction Section */}
      <div className="md:w-2/3 md:p-14 justify-center m-auto mt-4 md:m-0 md:mt-0">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Transactions History
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
          <div className="flex justify-around p-0 font-bold">
            <h2>Amount</h2>
            <h2>Date</h2>
            <h2>Type</h2>
          </div>
          {loading ? (
            <TransactionLoader />
          ) : (
            <TransactionList transactions={filteredTransactions} user={user} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
