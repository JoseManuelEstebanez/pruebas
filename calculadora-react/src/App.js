import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './App.css'; 

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  
  const handleButtonClick = (value) => {
    setDisplayValue(prevValue => prevValue === '0' ? String(value) : prevValue + value);
  };

  const calculateResult = () => {
    try {
      setDisplayValue(eval(displayValue));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <Display value={displayValue} />
      <div className="buttons">
        <Button onClick={handleButtonClick}>7</Button>
        <Button onClick={handleButtonClick}>8</Button>
        <Button onClick={handleButtonClick}>9</Button>
        <Button onClick={handleButtonClick}>/</Button>
        <Button onClick={handleButtonClick}>4</Button>
        <Button onClick={handleButtonClick}>5</Button>
        <Button onClick={handleButtonClick}>6</Button>
        <Button onClick={handleButtonClick}>*</Button>
        <Button onClick={handleButtonClick}>1</Button>
        <Button onClick={handleButtonClick}>2</Button>
        <Button onClick={handleButtonClick}>3</Button>
        <Button onClick={handleButtonClick}>-</Button>
        <Button onClick={handleButtonClick}>0</Button>
        <Button onClick={handleButtonClick}>.</Button>
        <Button onClick={calculateResult}>=</Button>
        <Button onClick={handleButtonClick}>+</Button>
      </div>
      <Button onClick={clearDisplay}>Limpiar</Button>
    </div>
  );
}

export default App;
