import React from 'react';
import UserCard from './UserCard';

function App() {
  const technologies = [
    {
      name: 'SQL',
      yearOfStart: 1970,
      creators: ['Donald D. Chamberlin', 'Raymond F. Boyce'],
      useCase: 'Database management'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'JavaScript',
      yearOfStart: 1995,
      creators: ['Brendan Eich'],
      useCase: 'Web development'
    },
    {
      name: 'Python',
      yearOfStart: 1991,
      creators: ['Guido van Rossum'],
      useCase: 'General-purpose programming'
    }
  ];

  return (
    <div className="App">
      <h1>Technology Information</h1>
      <div className="info-card-container">
        {technologies.map((tech, index) => (
          <UserCard key={index} info={tech} />
        ))}
      </div>
    </div>
  );
}

export default App;
