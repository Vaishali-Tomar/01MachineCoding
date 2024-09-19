import React, { useState } from "react";

const QuoteGenerator = () => {
  const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      tags: ["life", "inspiration"],
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      tags: ["motivation", "action"],
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
      tags: ["life", "inspiration"],
    },
    {
      text: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt",
      tags: ["life", "adventure"],
    },
    {
      text: "If you look at what you have in life, you'll always have more.",
      author: "Oprah Winfrey",
      tags: ["gratitude", "life"],
    },
    {
      text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron",
      tags: ["motivation", "success"],
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      tags: ["life", "unexpected"],
    },
  ];

  const [quote, setQuote] = useState(quotes[0]);
  const [selectedTag, setSelectedTag] = useState("");

  const generateQuote = () => {
    const filterQuotes = selectedTag ?
    quotes.filter((q) => tags.includes(selectedTag)) : quotes;
    const randomIndex = Math.floor(Math.random() * filterQuotes.length);
    setQuote(filterQuotes[randomIndex]);
  }

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  }

  const uniqueTags = [...new Set(quotes.flatMap((quote) => quote.tags))]
  return (
    <div>
      <h1>Quote Generator</h1>
      <p>
        "{quote.text}" - {quote.author}
      </p>
      <button onClick={generateQuote}>Generate New Quote</button>
      
      <div>
        <label htmlFor="">filter by Tags:</label>
        <select name="" id="" value={selectedTag} onChange={handleTagChange}>
          <option value="">All</option>
          {uniqueTags.map((tag) =>(
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QuoteGenerator;
