import React, { PureComponent } from 'react';

const defaultLineStyle = { 
  stroke: 'rgb(116, 163, 199)', 
  strokeWidth: 2 
};

export default class Line extends PureComponent {
  render() {
    const { 
      start: [ x1, y1 ], 
      end: [x2, y2], 
      style 
    } = this.props;

    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} style={style || defaultLineStyle} />
    );
  }
}
