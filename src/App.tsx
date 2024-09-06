import { useState } from 'react';
import { Define } from './componentes/Define/Define';
import { Calculate } from './componentes/Chart/Calculate';
import { Filter } from './componentes/Filter/Filter';
import { ExpenseList } from './componentes/ExpenseList/ExpenseList';
import { PopUp } from './componentes/PopUp/PopUp';
import './App.css';

function App() {
  const [budget, setBudget] = useState<number | null>(null);
  const [expenses, setExpenses] = useState<{ name: string; amount: number; category: string; date: string }[]>([]);

  const resetApp = () => {
    setBudget(null);
    setExpenses([]);
  };

  const handleAddExpense = (expense: { name: string; amount: number; category: string; date: string }) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remainingBudget = budget !== null ? budget - totalExpenses : 0;

  return (
    <div className='AppContainer'>
      <header>
        <div className='main-titlediv'>
          <h1>EXPENSE PLANNER</h1>
          {budget !== null && (
            <button className='reset-button' onClick={resetApp}>
              RESET APP
            </button>
          )}
        </div>
      </header>

      <section className='info-container'>
        {budget === null ? (
          <Define onBudgetDefine={setBudget} />
        ) : (
          <>
            <Calculate budget={budget} totalExpenses={totalExpenses} remaining={remainingBudget} />
            <Filter />
            <ExpenseList expenses={expenses} />
            <PopUp onAddExpense={handleAddExpense} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;

