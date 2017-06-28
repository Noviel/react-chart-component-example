import { dayNumberInYear, daysCountInYear } from './date';

const convertCoord = (from, to = {}, inverse = false) => {
  const { value, min = 0, max } = from;
  const { size, lowerOffset = 0, upperOffset = 0 } = to;

  const factor = (size)/(max - min);
  const scaledValue = value * factor;

  const result = inverse ? 
    size - upperOffset - scaledValue : 
    lowerOffset + scaledValue;

  return result;
};

const valueToCoord = ({ value, height, min = 0, max = 100, topMargin = 0}) =>
  convertCoord({ value, min, max}, { size: height }, true);

const dateToCoord = ({ year, month, day, width, leftRightMargin }) => 
  convertCoord({ 
    value: dayNumberInYear(year, month, day),
    min: 0,
    max: daysCountInYear(year)
  }, {
    size: width - leftRightMargin*2,
    lowerOffset: leftRightMargin
  });

export const createRenderData = (points, width, height, leftRightMargin = 5) => 
  points.map(({ date: { month, day, year }, value }) => ([
    dateToCoord({ year, month, day, width, leftRightMargin }), 
    valueToCoord({ value, height })
  ]));
