import React, { useState } from 'react';

function App() {
  const [startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');
  const [randomNum, setRandomNum] = useState(null);


  const generateRandomNumber = () => {

    if (!startRange || !endRange || isNaN(startRange) || isNaN(endRange)) {
      setRandomNum('Invalid Input');
      return;
    }

    const start = parseInt(startRange, 10);
    const end = parseInt(endRange, 10);


    if (start > end) {
      setRandomNum('Invalid Range');
      return;
    }

    const random = Math.floor(Math.random() * (end - start + 1)) + start;
    setRandomNum(random);
  };

  return (
    <div>

      <label style={{
        display: 'block',
        margin: '3px 2px'
      }}>
        Start Range:
        <input
          type="number"
          id="startRange"
          value={startRange}
          onChange={(e) => setStartRange(e.target.value)}
        />
      </label>


      <label style={{
        display: 'block',
        margin: '3px 2px'
      }}>
        End Range:
        <input
          type="number"
          id="endRange"
          value={endRange}
          onChange={(e) => setEndRange(e.target.value)}
        />
      </label>


      <button id="generate" onClick={generateRandomNumber} style={{
        margin: '5px 2px',
    
      }}>
        Generate
      </button>


      <div id="randomNumber" style={{
        border: '1px solid black',
        borderRadius: '0.25rem',
        width: 'fit-content', 
        padding: '5px 10px',
        fontFamily: 'monospace sens-serif',
      }}>{randomNum || 'Enter Valid Input'}</div>
    </div>
  );
}

export default App;
