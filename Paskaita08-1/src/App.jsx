import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import TestComponent from "./components/TestComponent";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Marius");

  const doHardWork = () => {
    let x = 0;
    for (let i = 0; i < 1000000000; i++) {
      x++;
    }
    return x + count;
  };

  const rez = useMemo(doHardWork, [count]);

  const doStuff = useCallback(() => {
    console.log("doStuff called " + count);
  }, [count]);

  const doStuff2 = () => {
    console.log("doStuff2 called" + count);
  };

  useEffect(() => {
    doStuff();
  }, [doStuff]);

  return (
    <>
      <div className="card">
        <h1>{rez}</h1>
        <h5>{name}</h5>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button onClick={() => setName(name + count)}>change name</button>
        <TestComponent name={name} doStuff={doStuff} />
      </div>
    </>
  );
}

export default App;
