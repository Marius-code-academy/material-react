import { useState } from "react";
import "./App.css";
import UseEffectTest from "./components/UseEffectTest/UseEffectTest";
import Timer from "./components/Timer/Timer";
import Posts from "./components/Posts/Posts";

function App() {
  const [count, setCount] = useState(0);
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> <br />
      <button onClick={() => setShowComponent(!showComponent)}>Toggle component</button>
      {showComponent && <UseEffectTest />}
      <Timer />
      <Posts />
    </div>
  );
}

export default App;
