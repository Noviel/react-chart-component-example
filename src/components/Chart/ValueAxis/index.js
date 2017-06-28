import React from 'react';

import style from './style.css'; 

const Value = ({ value }) => 
  <span className={style.value}>
    {value}
  </span>;

const createValues = ({ max, count, step }) => {
  const values = new Array(count);
  let value = max;

  for (let i = 0; i <= count; i++) {
    values[i] = <Value key={value} value={value} />;
    value -= step;
  }

  return values;
};

export default function ValueAxis({ height, max = 100, min = 0, step = 20, offset = -12 }) {
  const count = Math.ceil((max - min)/step);
  return (
    <div className={style.valueline} style={{ height: height + height/count }}>
      {createValues({ max, count, step })}
    </div>
  );
}
