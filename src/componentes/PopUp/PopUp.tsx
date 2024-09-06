import { useState } from "react";
import Modal from "react-modal";
import "./PopUp.css";

Modal.setAppElement("#root");

interface PopUpProps {
  onAddExpense: (expense: {
    name: string;
    amount: number;
    category: string;
    date: string
  }) =>void;
}

export function PopUp({ onAddExpense }: PopUpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expenseData, setExpenseData] = useState({ name: '', amount: 0, category: '', date: '' });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setExpenseData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddExpense(expenseData);
    closeModal();
    setExpenseData({ name: '', amount: 0, category: '', date: '' });
  };

  return (
    <aside className="popup-container">
      <button className="circular-button" onClick={openModal}>
        <img src="src/assets/plus-svgrepo-com.svg" alt="" className="icon" />
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-title">NEW EXPENSE</h2>
        <hr className="line" />
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Expense Name:</label>
            <input 
              type="text"
              id="name"
              name="name"
              className="input-field" 
              value={expenseData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="input-field"
              value={expenseData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select 
              className="selector2"
              id="category"
              name="category"
              value={expenseData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                -- Select --
              </option>
              <option value="Savings">Savings</option>
              <option value="Food">Food</option>
              <option value="House">House</option>
              <option value="Miscellaneous">Miscellaneous Expenses</option>
              <option value="Leisure">Leisure</option>
              <option value="Health">Health</option>
              <option value="Subscriptions">Subscriptions</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="expensedate">Expense Date:</label>
            <input
              type="date" 
              id="expensedate"
              name="date"
              className="input-field"
              value={expenseData.date}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">
            REGISTER EXPENSE
          </button>
        </form>
      </Modal>
    </aside>
  );
}