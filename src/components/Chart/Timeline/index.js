import React from 'react';

import style from './style.css'; 

const months = [
  'Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'
];

const Month = ({ name }) => 
  <span className={style.month}>{name}</span>;

const Timeline = ({ width, year, offset }) => 
  <div className={style.container} style={{ top: offset }}>
    <div className={style.timeline} style={{ width }}>
      {months.map(name => <Month key={name} name={name} />)}
    </div>
    <div className={style.year}>{year}</div>
  </div>;

export default Timeline;
