import React, { useState } from "react";

function App2() {
  const [count, setCount] = useState(2);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
      className="App2"
    >
      App {count}
    </div>
  );
}

export default App2;
