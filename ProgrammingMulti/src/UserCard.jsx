import React from 'react';
import './UserCard.css';

function UserCard(props) {
  return (
    <div className="info-card">
      <h2>{props.info.name}</h2>
      <p><strong>Year of Start:</strong> {props.info.yearOfStart}</p>
      <p><strong>Creators:</strong> {props.info.creators.join(', ')}</p>
      <p><strong>Use Case:</strong> {props.info.useCase}</p>
    </div>
  );
}

export default UserCard;
