import React from 'react';
import { render } from 'react-dom';

import Chart from './components/Chart';

const currencyData = {
  2015: [
    { value: 76.02, date: { year: 2015, month: 1, day: 1} },
    { value: 71.26, date: { year: 2015, month: 1, day: 9} },
    { value: 69.01, date: { year: 2015, month: 1, day: 25} },
    { value: 73.18, date: { year: 2015, month: 1, day: 29} },

    { value: 61.02, date: { year: 2015, month: 2, day: 2} },
    { value: 61.02, date: { year: 2015, month: 2, day: 6} },
    { value: 58.11, date: { year: 2015, month: 2, day: 8} },
    { value: 60.18, date: { year: 2015, month: 2, day: 12} },
    { value: 60.18, date: { year: 2015, month: 2, day: 21} },
    { value: 59.68, date: { year: 2015, month: 2, day: 25} },

    { value: 61.12, date: { year: 2015, month: 3, day: 1} },
    { value: 65.09, date: { year: 2015, month: 3, day: 3} },
    { value: 58.76, date: { year: 2015, month: 3, day: 20} },

    { value: 57.05, date: { year: 2015, month: 4, day: 1} },
    { value: 55.09, date: { year: 2015, month: 4, day: 25} },
    { value: 54.76, date: { year: 2015, month: 4, day: 30} },

    { value: 59.99, date: { year: 2015, month: 5, day: 5} },
    { value: 57.16, date: { year: 2015, month: 5, day: 29} },

    { value: 61.03, date: { year: 2015, month: 6, day: 1} },
    { value: 58.06, date: { year: 2015, month: 6, day: 8} },
    { value: 58.06, date: { year: 2015, month: 6, day: 12} },
    { value: 55.06, date: { year: 2015, month: 6, day: 18} },
    { value: 39.95, date: { year: 2015, month: 6, day: 20} },

    { value: 39.95, date: { year: 2015, month: 7, day: 1} },
    { value: 38.92, date: { year: 2015, month: 7, day: 5} },
    { value: 38.92, date: { year: 2015, month: 7, day: 12} },
    { value: 20.65, date: { year: 2015, month: 7, day: 22} },
    { value: 20.25, date: { year: 2015, month: 7, day: 29} },
    { value: 19.77, date: { year: 2015, month: 7, day: 31} },

    { value: 42.0, date: { year: 2015, month: 8, day: 6} },
    { value: 38.01, date: { year: 2015, month: 8, day: 9} },
    { value: 38.01, date: { year: 2015, month: 8, day: 9} },
    { value: 37.23, date: { year: 2015, month: 8, day: 19} },

    { value: 42.03, date: { year: 2015, month: 8, day: 27} },

    { value: 39.65, date: { year: 2015, month: 9, day: 3} },
    { value: 48.12, date: { year: 2015, month: 9, day: 18} },
    { value: 58.97, date: { year: 2015, month: 9, day: 29} },

    { value: 51.65, date: { year: 2015, month: 10, day: 1} },
    { value: 42.12, date: { year: 2015, month: 10, day: 12} },
    { value: 41.97, date: { year: 2015, month: 10, day: 27} },

    { value: 43.65, date: { year: 2015, month: 11, day: 2} },
    { value: 38.12, date: { year: 2015, month: 11, day: 18} },
    { value: 55.17, date: { year: 2015, month: 11, day: 27} },

    { value: 58.12, date: { year: 2015, month: 12, day: 1} },
    { value: 65.17, date: { year: 2015, month: 12, day: 17} },
    { value: 65.17, date: { year: 2015, month: 12, day: 31} }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  render(
    <div>
      <Chart 
        data={currencyData['2015']} 
        width={680} 
        height={180}
        valueStep={20}
        valueMax={80}
        valueMin={0}
      />
      <Chart 
        data={currencyData['2015']} 
        width={380} 
        height={180}
        valueStep={25}
        valueMax={250}
        valueMin={0}
      />
      <Chart 
        data={currencyData['2015']} 
        width={280} 
        height={280}
        valueStep={5}
        valueMax={77}
        valueMin={19}
      />    
    </div>,
    document.getElementById('app')
  );
});
