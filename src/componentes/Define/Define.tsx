import { useState } from 'react';
import './Define.css';


interface DefineProps {
  onBudgetDefine: (budget: number) => void;
}

export function Define({ onBudgetDefine }: DefineProps) {
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (typeof inputValue === 'string' && inputValue !== '') {
      onBudgetDefine(Number(inputValue));
    } else if (typeof inputValue === 'number') {
      onBudgetDefine(inputValue);
    }
  };

  return (
    <section className='define-container'>
      <h2>Define budget</h2>
      <input 
        type="number" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <button 
        onClick={handleButtonClick} 
        disabled={inputValue === '' || Number(inputValue) <= 0}
      >
        DEFINE BUDGET
      </button>
    </section>
  );
}


