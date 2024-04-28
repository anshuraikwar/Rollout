import React, { useEffect } from 'react';
import './App.css';
import Roller from './components/roller/Roller';

const rollerOffset = 500;

function App() {
  const tapes = [
    {
      id: 'roller-1',
      top: '78vh',
      left: 'calc(-1.5 * var(--roll-width))',
      rotate: -1,
      theme: 'white',
      delay: 100,
    },
    {
      id: 'roller-2',
      top: '-19vh',
      left: 'calc(-1.5 * var(--roll-width))',
      rotate: 2,
      theme: 'black',
      delay: 1 * rollerOffset,
    },
    {
      id: 'roller-3',
      top: '76vh',
      left: 'calc(-1.5 * var(--roll-width))',
      rotate: -18,
      theme: 'white',
      delay: 2 * rollerOffset,
    },
    {
      id: 'roller-4',
      top: '101vh',
      left: 'calc(-1.5 * var(--roll-width))',
      rotate: -11,
      theme: 'black',
      delay: 3 * rollerOffset,
    },
    {
      id: 'roller-5',
      top: '-17vh',
      left: 'calc(-1.5 * var(--roll-width))',
      rotate: 28,
      theme: 'black',
      delay: 4 * rollerOffset,
    },
    {
      id: 'roller-6',
      top: '45vh',
      left: 'calc(-2* var(--roll-width))',
      rotate: -22,
      theme: 'white',
      delay: 5 * rollerOffset,
    },
    {
      id: 'roller-7',
      top: '-28vh',
      left: 'calc(-1.5 * var(--roll-width))',
      rotate: 10,
      theme: 'white',
      delay: 7 * rollerOffset,
    },
    {
      id: 'roller-8',
      top: '110vh',
      left: '34vw',
      rotate: -29,
      theme: 'white',
      delay: 9 * rollerOffset,
    },
    {
      id: 'roller-9',
      top: '31vh',
      left: 'calc(-1.5 * var(--roll-width))',
      rotate: 0,
      theme: 'black',
      delay: 10 * rollerOffset,
    },
  ];

  return (
    <div id="page" className="page">

      {tapes.map((tape) => (
        <Roller tape={tape} />
      ))}

    </div>
  );
}

export default App;
