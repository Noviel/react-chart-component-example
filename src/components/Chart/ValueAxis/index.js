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

const createValues = (max, count, step, height, startHeight = -6) => {
  let currentHeight = startHeight;
  const heightStep = height/count;
  const values = new Array(count);

  for (let i = count; i >= 0; i--) {
    const value = i*step;
    values[i] = <Value key={value} value={value} height={currentHeight} />;
    currentHeight += heightStep;
  }
  return values;
};

export default function ValueAxis({ height, max = 80, step = 20 }) {
  const count = max/step;
  return (
    <div className={style.valueline}>
      {createValues(max, count, step, height)}
    </div>
  );
}
