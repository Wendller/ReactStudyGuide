import React from 'react';

export default props => {
  const { min, max } = props;
  const number = Math.random() * (max - min) + min;

  return (
    <div>
      <strong>Random number generator:</strong>
      <h3>The generated number was: {Math.floor(number)}</h3>
    </div>
  );
}