import React from 'react';
import './card.css';

export default props => {

  const styleObject = {
    backgroundColor: props.color || 'cyan',
    borderColor: props.color || 'cyan'
  }

  return (
    <div className="card" style={styleObject}>
      <div className="title" style={styleObject}>{props.title}</div>
      <div className="content">{props.children}</div>
    </div>
  );
}