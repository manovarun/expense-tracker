import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = ({ expenseHandler }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { title, amount, date } = expense;

    if (!title || !amount || !date) {
      setError("Please enter Title, Amount, Date");
    } else {
      expenseHandler({ title, amount, date: new Date(date) });
      setExpense({
        title: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <div>
      {error && <p className="error-control">{error}</p>}
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => onChangeHandler(e)}
              value={expense.title}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="0.01"
              step="0.01"
              onChange={(e) => onChangeHandler(e)}
              value={expense.amount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={(e) => onChangeHandler(e)}
              value={expense.date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
