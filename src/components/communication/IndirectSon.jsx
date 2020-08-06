import React from 'react';

export default props => {
  const min = 0;
  const max = 50;
  const ageGenerator = () => Math.floor(Math.random() * (max - min) + min);
  const nerdIterator = () => Math.random() > 0.5;

  return (
    <div>
      <div>Child</div>
      <button onClick={event => {props.clicked('Welen', ageGenerator(), nerdIterator())}}>
        Give information
      </button>
    </div>
  );
}