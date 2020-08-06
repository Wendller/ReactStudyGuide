import React from 'react';

export default props => {
  return (
    <div>
      {React.Children.map(props.children, (member) => {
        return React.cloneElement(member, props);
      })}
    </div>
  );
}