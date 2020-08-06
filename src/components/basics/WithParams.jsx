import React from 'react';

export default function WithParams(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </div>
  );
}