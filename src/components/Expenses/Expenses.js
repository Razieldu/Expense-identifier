import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expense.js");
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
