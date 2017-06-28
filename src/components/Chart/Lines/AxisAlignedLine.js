import React from 'react';

import Line from './Line';

const defaultStyle = {
  stroke: 'rgba(169,175,182, 0.8)', 
  strokeWidth: 1,
  strokeDasharray: [8, 3]
};

const AxisAlignedLine = ({ axis, position, start, end, style = defaultStyle }) => {
  let alignedStart = [0, 0];
  let alignedEnd = [0, 0];

  if (axis === 'x') {
    alignedStart = [position, start];
    alignedEnd = [position, end];
  } else {
    alignedStart = [start, position];
    alignedEnd = [end, position];
  }

  return (
    <Line start={alignedStart} end={alignedEnd} style={style} />
  );
};

export default AxisAlignedLine;
