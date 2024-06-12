
import React, { useState } from 'react';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [peekValue, setPeekValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handlePush = () => {
    if (inputValue !== '') {
      setStack([...stack, inputValue]);
      setInputValue('');
      setIsEmpty(false);
    }
  };

  const handlePop = () => {
    const newStack = stack.slice(0, -1);
    setStack(newStack);
    if (newStack.length === 0) {
      setIsEmpty(true);
    }
  };

  const handlePeek = () => {
    if (stack.length > 0) {
      setPeekValue(stack[stack.length - 1]);
    } else {
      setPeekValue('Stack is empty');
    }
  };

  const handleEmpty = () => {
    setIsEmpty(stack.length === 0);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Stack</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a value"
      />
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}>Pop</button>
      <button onClick={handlePeek}>Peek</button>
      <button onClick={handleEmpty}>Check if Empty</button>
      <h2>Current Stack</h2>
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {peekValue && <p>Peek: {peekValue}</p>}
      <p>{isEmpty ? 'The stack is empty' : 'The stack is not empty'}</p>
    </div>
  );
};

export default Stack;