import React, { useState } from 'react';

const AnagramChecker = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [isAnagram, setIsAnagram] = useState(null);

  const handleCheckAnagram = () => {
    const normalize = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const normalizedWord1 = normalize(word1);
    const normalizedWord2 = normalize(word2);
    setIsAnagram(normalizedWord1 === normalizedWord2);
  };

  return (
    <div>
      <h1>Anagram Checker</h1>
      <input
        type="text"
        placeholder="First Word"
        value={word1}
        onChange={(e) => setWord1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second Word"
        value={word2}
        onChange={(e) => setWord2(e.target.value)}
      />
      <button onClick={handleCheckAnagram}>Check</button>
      {isAnagram !== null && (
        <h2>{isAnagram ? 'The words are anagrams!' : 'The words are not anagrams.'}</h2>
      )}
    </div>
  );
};

export default AnagramChecker;
