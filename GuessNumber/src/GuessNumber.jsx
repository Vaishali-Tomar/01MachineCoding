
import React, { useState } from 'react';

const GuessNumber = () => {
  const [guess, setGuess] = useState('1');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (userGuess === number) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (userGuess < number) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
  };

  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 100</p>
      <input type="number" value={guess} onChange={handleChange} />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={handleRestart}>Restart</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessNumber;