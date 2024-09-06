import { useState } from "react";
import "./ExpenseList.css";
import { ExpenseCard } from "../ExpenseCard/ExpenseCard";

interface ExpenseListProps {
  expenses: {
    name: string;
    amount: number;
    category: string;
    date: string;
  }[];
}

export function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <section className="expenselist-container">
      <h1 className="list-title">
        {expenses.length === 0 ? "No expenses..." : "Expenses:"}
      </h1>
      {expenses.map((expense, index) => (
        <ExpenseCard
          key={index}
          name={expense.name}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
        />
      ))}
    </section>
  );
}
