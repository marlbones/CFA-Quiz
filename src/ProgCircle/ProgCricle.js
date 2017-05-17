import React from 'react';
import { Circle } from 'rc-progress';


const ProgCircle = ({ percent }) => {
  return (
    <div>
      <Circle percent={percent} strokeWidth="3" strokeColor="#4286f4" />
    </div>
  )
}

export default ProgCircle;
