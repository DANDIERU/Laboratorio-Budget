import { useState } from "react";
import "./Filter.css";

export function Filter() {
  return (
    <section className="filter-container">
      <p className="filter-title">Filter categories</p>

      <select className="selector">
        <option value="" disabled selected>
          -- All categories --
        </option>
        <option value="Savings">Savings</option>
        <option value="Food">Food</option>
        <option value="House">House</option>
        <option value="Miscellaneous">Miscellaneous Expenses</option>
        <option value="Leisure">Leisure</option>
        <option value="Health">Health</option>
        <option value="Subscriptions">Subscriptions</option>        
      </select>
    </section>
  );
}
