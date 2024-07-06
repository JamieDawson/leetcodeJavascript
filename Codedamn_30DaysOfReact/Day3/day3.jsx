import React, { useState } from "react";

function App() {
  const [startRange, setStartRange] = useState("");
  const [endRange, setEndRange] = useState("");
  const [randomNumber, setRandomNumber] = useState("");

  const generateNumbers = (event) => {
    event.preventDefault();

    let start = parseInt(startRange, 10);
    let end = parseInt(endRange, 10);

    if (!start || !end || isNaN(start) || isNaN(end)) {
      setRandomNumber("Invalid Input");
      return;
    }

    if (start > end) {
      return;
    }

    setRandomNumber(Math.floor(Math.random() * (end - start + 1) + start));
  };

  return (
    <>
      <form onSubmit={generateNumbers}>
        <input
          type="number"
          id="startRange"
          placeholder="startRange"
          onChange={(e) => setStartRange(e.target.value)}
        />
        <input
          type="number"
          id="endRange"
          placeholder="endRange"
          onChange={(e) => setEndRange(e.target.value)}
        />
        <button type="submit" id="generate">
          random number
        </button>
      </form>
      <div id="randomNumber">{randomNumber}</div>
    </>
  );
}

export default App;
