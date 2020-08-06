import React from 'react';
import DirectSon from './DirectSon';

export default props => {
  return (
    <div>
      <DirectSon text="Son 01" number={20} bool={false}/>
      <DirectSon text="Son 02" number={17} bool={false}/>
    </div>
  );
}