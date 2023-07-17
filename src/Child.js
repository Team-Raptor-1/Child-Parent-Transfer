import React, { useState, useEffect } from 'react';

const ChildComponent = ({ number1, number2, onSumChange, onNumbersChange }) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const result = number1 + number2;
    setSum(result);

  }, [number1, number2, onSumChange]);

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => onNumbersChange(parseInt(e.target.value), number2)}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => onNumbersChange(number1, parseInt(e.target.value))}
      />
    </div>
  );
};

export default ChildComponent;
