import React, { useState } from "react";
import "./Expenses.scss";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = () => {
    return expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses()} />
      <ExpensesList expenses={filteredExpenses()} />
    </Card>
  );
};

export default Expenses;
