import React from "react";

function TransactionList({ transactions, user }) {
  return (
    <div className="space-y-4">
      {transactions.map((transaction, idx) => {
        // Check if the transaction is a self-transfer
        const selfTransfer =
          transaction.from === transaction.to &&
          transaction.type === "transfer";

        // Extract only the date part (YYYY-MM-DD) from createdAt
        const dateOnly = transaction.createdAt.split("T")[0];

        return (
          <div
            key={transaction._id + idx}
            className="grid grid-cols-3 gap-4 items-center p-4 bg-gray-100 rounded-md text-center"
          >
            <span
              className={`${
                transaction.type === "deposit" ||
                (transaction.type === "transfer" && transaction.to === user._id)
                  ? "text-green-500"
                  : selfTransfer
                  ? "text-gray-500" // Neutral color for self-transfer
                  : "text-red-500"
              } font-bold`}
            >
              {transaction.type === "deposit" ||
              (transaction.type === "transfer" && transaction.to === user._id)
                ? `+${transaction.amount}`
                : selfTransfer
                ? `${transaction.amount}`
                : `-${transaction.amount}`}
            </span>
            <span className="text-black">{dateOnly}</span>
            <span className="text-black-500 capitalize">
              {selfTransfer ? "Self transfer" : transaction.type}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionList;
