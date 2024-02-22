import React, { useState } from 'react';

function Counter() {
  // State variable to hold the count
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
