import React from 'react';
import style from './style.css';

import { formatDate } from '../../../lib/date';

const negativeDiffSign = '\u25BC';
const positiveDiffSign = '\u25B2';

const popupAttribute = { 'data-popup': true };

const adjustPosition = ([x, y], width = 640, height = 320) => {
  const newX = (x > width - 150) ? (x - 100) : (x + 35);
  const newY = y > 60 ? (y - 50) : (y + 30);
  return [newX, newY];
};

const renderDiff = diff => {
  if (typeof diff !== 'number') {
    return null;
  }
  const fixed = diff.toFixed(2);

  if (fixed > 0) {
    return <span className={style.positiveDiff}>{`${positiveDiffSign}${fixed}`}</span>;
  } else {
    return <span className={style.negativeDiff}>{`${negativeDiffSign}${fixed}`}</span>;
  }
};

const createPopupStyle = pos => ({
  left: `${pos[0]}px`,
  top: `${pos[1]}px`
});

const renderDate = date =>
  <div className={style.date}>{formatDate(date)}</div>;

const renderValue = value => <b>$ {value} </b>;

export default function Popup({ position, diff, data, parentWidth, parentHeight }) {
  const adjustedPosition = adjustPosition(position, parentWidth, parentHeight);
  return (
    <div {...popupAttribute} className={style.popup} style={createPopupStyle(adjustedPosition)}>
      {renderDate(data.date)}
      <div>
        {renderValue(data.value)}
        {renderDiff(diff)}
      </div>
    </div>
  );
}
