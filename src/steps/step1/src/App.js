import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
      className="App"
    >
      App {count}
    </div>
  );
}

export default App;
