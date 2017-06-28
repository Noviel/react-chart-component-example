import React from 'react';

import AxisAlignedLine from './AxisAlignedLine';

const style = { 
  stroke: 'rgba(122,122,122, 0.5)', 
  strokeWidth: 1
};

const BackgroundLine = ({ position, start, end }) => (
  <AxisAlignedLine
    axis="y"
    start={start}
    end={end}
    position={position}
    style={style}
  />
);

export const createLines = ({ count, step, start, end, offset = 0}) => {
  const lines = new Array(count);
  let yPos = offset;
  for (let i = 0; i < count; i++) {
    lines[i] = <BackgroundLine key={i} start={start} end={end} position={yPos} />;
    yPos += step;
  }
  
  return lines;
};


export default BackgroundLine;
