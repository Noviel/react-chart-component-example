import React from 'react';

const Point = ({ pos: [x, y], radius }) =>
  <circle 
    cx={x} 
    cy={y} 
    r={radius} 
    stroke="white" 
    strokeWidth={radius*0.65} 
    fill="rgb(22,100,220)" 
  />;

export default Point;
