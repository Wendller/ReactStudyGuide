import React from 'react';

export default props => {
  const style = {
    margin: '5px',
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div className="family-member" style={style}>
      <span>{props.name}</span>
      <br/>
      <span>{props.lastName}</span>
    </div>
  );
}