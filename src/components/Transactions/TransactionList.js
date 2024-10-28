import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => {
        // Extract only the date part (YYYY-MM-DD) from createdAt
        const dateOnly = transaction.createdAt.split("T")[0];

        return (
          <div
            key={transaction._id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-md"
          >
            <span
              className={`${
                transaction.amount > 0 ? "text-green-500" : "text-red-500"
              } font-bold`}
            >
              {transaction.amount > 0
                ? `+${transaction.amount}`
                : transaction.amount}
            </span>
            <span className="text-black">{dateOnly}</span>
            <span className="text-black-500 capitalize">
              {transaction.type}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionList;
