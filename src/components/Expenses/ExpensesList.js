import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      ) : (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      )}
    </div>
  );
};

export default ExpensesList;
