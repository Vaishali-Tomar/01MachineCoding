import React, {useState} from 'react'

const WordCount = () => {
    const [text, setText] = useState("");
    const [word, setWord] = useState("");
    const [char, setChar] = useState("");


    const handleChange = (e) => {
     const inputText = e.target.value;
     setText(inputText);
     setWord(inputText.trim() === '' ? 0 : inputText.trim().split(/\s+/).length);
     setChar(inputText.length)
    }
    const handleClear = () => {
        setText('');
        setWord(0);
      };

  return (
    <div>
      <h1>Word Count Tool</h1>
      <textarea value={text} onChange={handleChange}placeholder='Type or paste here' rows='10' col="30" />
      <div>
        <button onClick={handleClear}>clear</button>
      </div>
      <p>Word Count: {word}</p>
      <p>Word Char: {char}</p>
    </div>
  )
}

export default WordCount
