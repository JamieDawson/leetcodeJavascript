import React, { useState } from "react";

const [count, setCount] = useState(0);

return (
  <>
    <h1>Counter</h1>
    {count}

    <button>-</button>
    <button>+</button>

    <button>Reset</button>
  </>
);
