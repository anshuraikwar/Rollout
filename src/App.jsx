import React from 'react';

// import: styles
import './App.css';

// import: config
import tapes from './config/tapesConfig';

// import: components
import Roller from './components/roller/Roller';

function App() {
  return (
    <div id="page" className="page">

      {tapes.map((tape) => (
        <Roller
          key={tape.id}
          tape={tape}
        />
      ))}

    </div>
  );
}

export default App;
