export const createParallelLinesData = (count, step, from, to, offset = 0) => {
  const data = new Array(count);

  for (let i = 0; i < count; i++) {
    const yPos = i * step + offset;
    const points = [[from, yPos], [to, yPos]];

    data[i] = points;
  }

  return data;
};
