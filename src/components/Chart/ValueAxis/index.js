import React from 'react';

import style from './style.css'; 

const Value = ({ value, height }) => 
  <span 
    className={style.value} 
    style={{
      position: 'absolute',
      top: height
    }}
  >
    {value}
  </span>;

const createValues = ({ max, count, step, height, offset }) => {
  const values = new Array(count);
  const heightStep = height/count;
  let currentHeight = offset;
  let value = max;

  for (let i = 0; i <= count; i++) {
    values[i] = <Value key={value} value={value} height={currentHeight} />;
    currentHeight += heightStep;
    value -= step;
  }
  return values;
};

export default function ValueAxis({ height, max = 100, min = 0, step = 20, offset = -12 }) {
  const count = Math.ceil((max - min)/step);
  return (
    <div className={style.valueline}>
      {createValues({ max, count, step, height, offset })}
    </div>
  );
}
