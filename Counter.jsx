
/* createa counter application with the following increment decrement reset */
//  create a react application with home aboutcantact
// implement rounting using react router so that nav btw pages works without reloading pages.
// counter


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset     = () => setCount(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;