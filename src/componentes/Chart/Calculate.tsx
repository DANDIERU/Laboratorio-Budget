import "./Calculate.css";

interface CalculateProps {
  budget: number;
  totalExpenses: number;
  remaining: number;
}

export function Calculate({ budget, totalExpenses, remaining }: CalculateProps) {
  return (
    <section className="calculate-container">
      <p><span>Budget:</span> ${budget}</p>
      <p><span>Remaining:</span> ${remaining}</p>
      <p><span>Expenses:</span> ${totalExpenses}</p>
    </section>
  );
}
