const NEXT_POINT = 1; //eslint-disable-line no-unused-vars
const PREV_POINT = -1;

const distanceSquared = (position1, position2) => 
  (position1[0] - position2[0])*(position1[0] - position2[0]) + 
  (position1[1] - position2[1])*(position1[1] - position2[1]);

export const getNearestPointIndex = (targetPosisiton, positions, maxDistanceToTrigger = 10*10) => {
  let minDistance = Infinity;
  let minIndex = -1;

  for (let i = 0; i < positions.length; i++) {
    const d = distanceSquared(positions[i], targetPosisiton);
    if (d < maxDistanceToTrigger && d < minDistance) {
      minIndex = i;
      minDistance = d;
    }
  }

  return minIndex;
};

export const getNearestToAxisPointIndex = (axisPosition, positions, maxDistanceToTrigger = 25) => {
  let minDistance = Infinity;
  let minIndex = -1;

  for (let i = 0; i < positions.length; i++) {
    const d = Math.abs(axisPosition - positions[i][0]);
    if (d < maxDistanceToTrigger && d < minDistance) {
      minIndex = i;
      minDistance = d;
    }
  }

  return minIndex;
};

const valueSelector = el => el.value;
const isValidIndex = (index, min, max) => index >= 0 && index <= max;

export const getPointsDiff = (points, index, compareIndexOffset = PREV_POINT, selector = valueSelector) => {
  const compareIndex = index + compareIndexOffset;
  const maxIndex = points.length - 1;
  if (!isValidIndex(index, 0, maxIndex) || !isValidIndex(compareIndex, 0, maxIndex)) {
    return null;
  }

  return selector(points[index]) - selector(points[compareIndex]);
};
