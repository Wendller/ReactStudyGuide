import React from 'react';

export default props => {
  
  return (
    <div>
      { props.number % 2 == 0 ? 
        <span>Par</span> : 
        <span>Ímpar</span> 
      }      
    </div>
  );
}