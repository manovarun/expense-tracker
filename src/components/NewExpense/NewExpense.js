import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = ({ newExpenseHandler }) => {
  const addExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    newExpenseHandler(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm expenseHandler={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
