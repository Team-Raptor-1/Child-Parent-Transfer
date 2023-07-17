import React, { useState } from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleNumbersChange = (num1, num2) => {
    setNumber1(num1);
    setNumber2(num2);
  };

  const handleSumChange = (result) => {
    setSum(result);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent
        number1={number1}
        number2={number2}
        onSumChange={handleSumChange}
        onNumbersChange={handleNumbersChange}
      />
      <p>Number 1: {number1}</p>
      <p>Number 2: {number2}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default ParentComponent;
