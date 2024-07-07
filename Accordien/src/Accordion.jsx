// src/Accordion.js
import React, { useState } from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <h1>{title}</h1>
     <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div>{content}</div>}
    </div>

    
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      
      {items.map((item, index ) => (
        <AccordionItem key={index}  title={item.title} content={item.content}/>
      ))}
    </div>
  );
};

export default Accordion;