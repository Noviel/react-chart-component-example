import React from 'react';
import Line from './Line';

export const createConnectedLines = data => {
  const lines = [];
  const count = data.length - 1;

  for (let i = 0; i < count; i++) {
    const start = data[i];
    const end = data[i + 1];

    lines.push(<Line key={i} start={start} end={end} />);
  }

  return lines;
};

export default createConnectedLines;
