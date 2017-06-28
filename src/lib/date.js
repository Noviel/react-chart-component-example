const DAY_LENGTH = 1000 * 60 * 60 * 24;

const formatOpts = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

export const daysInMonth = (year, month) => new Date(year, month).getDate();

export const dayNumberInYear = (year, month, day) => {
  const yearDate = new Date(year, 1, 0);
  const targetDate = new Date(year, month, day);

  return Math.ceil((targetDate - yearDate) / DAY_LENGTH);
};

export const daysCountInYear = year => !(year % 400) || (year % 100 && !(year % 4)) ? 366 : 365;

export const formatDate = ({ year, month, day }, opts = formatOpts) => {
  const date = new Date(year, month - 1, day + 1); // convert date data to js-format

  return date.toLocaleDateString('ru', opts).slice(0, -3); // remove ' г.'
};
