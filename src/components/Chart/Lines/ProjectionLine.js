import React from 'react';

import AxisAlignedLine from './AxisAlignedLine';

const style = {
  stroke: 'rgba(169,175,182, 0.8)', 
  strokeWidth: 1,
  strokeDasharray: [8, 3]
};

const ProjectionLine = ({ position, start, end }) => (
  <AxisAlignedLine
    axis="x"
    start={start}
    end={end}
    position={position}
    style={style}
  />
);

export default ProjectionLine;
