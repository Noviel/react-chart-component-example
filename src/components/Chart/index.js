import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import style from './style.css';

import Point from './Point';
import Popup from './Popup';
import Timeline from './Timeline';
import ValueAxis from './ValueAxis';

import ProjectionLine from './Lines/ProjectionLine';
import BackgroundLine, { createLines } from './Lines/BackgroundLines';
import createConnectedLines from './Lines/createConnectedLines';

import { getNearestToAxisPointIndex, getPointsDiff } from '../../lib/points';
import { createRenderData } from '../../lib/coordinates';

const TIMELINE_HEIGHT = 58;
const VALUELINE_WIDTH = 32;

export default class Chart extends Component {
  state = {
    mousePos: [-100, -100]
  }

  componentWillMount() {
    this.initValues();
  }

  componentDidMount() {
    this.bounds = this.svg.getBoundingClientRect();
  }

  initValues = () => {
    const { height, width, data, valueStep, valueMin, valueMax } = this.props;
    
    const backgroundLinesCount = Math.ceil((valueMax - valueMin)/valueStep);
    const renderStep = height/backgroundLinesCount;

    this.backgroundLines = createLines({ 
      count: backgroundLinesCount + 1, 
      step: renderStep, 
      start: 0, 
      end: width, 
      offset: 1
    });

    this.renderData = createRenderData({ 
      points: data, 
      width, 
      height,
      valueMin,
      valueMax
    });
    // all data should belongs to one year
    this.year = data[0].date.year;
  }

  updateMouse = (x, y) => {
    this.setState({ mousePos: [x - this.bounds.left, y - this.bounds.top] });
  }

  onMouseMove = debounce(e => this.updateMouse(e.clientX, e.clientY), 100, { 
    leading: true,
    trailing: false,
    maxWait: 100
  })

  render() {
    const {
      width,
      height,
      data,
      valueStep,
      valueMax,
      valueMin
    } = this.props;

    const { mousePos } = this.state;
    const { renderData, backgroundLines } = this;

    const pointIndex = getNearestToAxisPointIndex(mousePos[0], renderData);
    const isPoint = pointIndex > -1;
    const pointData = isPoint ? renderData[pointIndex] : null;

    return (
      <div 
        className={style.container} 
        style={{ 
          position: 'relative', 
          height: height + TIMELINE_HEIGHT,
          width: width + VALUELINE_WIDTH
        }}
      >
        <svg
          className={style.svg}
          height={height} 
          width={width} 
          onMouseMove={this.onMouseMove}
          ref={svg => { this.svg = svg; } }
        >
          {backgroundLines}
          <BackgroundLine position={height - 1} start={0} end={width} />
          {createConnectedLines(renderData)}

          {isPoint && 
            <ProjectionLine 
              position={pointData[0]} 
              start={pointData[1]} 
              end={height - 1} 
            /> 
          }
          {isPoint && <Point pos={pointData} radius={4} />}
        </svg>
        {isPoint &&
          <Popup 
            position={pointData}
            parentWidth={width}
            parentHeight={height}
            diff={getPointsDiff(data, pointIndex)} 
            data={data[pointIndex]}
          />
        }
        <ValueAxis height={height} min={valueMin} max={valueMax} step={valueStep} />
        <Timeline width={width} year={data[0].date.year} offset={height + 20} />
      </div>
    );
  }
}
