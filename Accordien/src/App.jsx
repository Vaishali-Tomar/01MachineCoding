// src/App.js
import React from 'react';
import Accordion from './Accordion.jsx';

const items = [
  {
    title: 'Item 1',
    content: 'This is the content for item 1.',
  },
  {
    title: 'Item 2',
    content: 'This is the content for item 2.',
  },
  {
    title: 'Item 3',
    content: 'This is the content for item 3.',
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;
