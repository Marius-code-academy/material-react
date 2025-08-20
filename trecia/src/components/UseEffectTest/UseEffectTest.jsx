import { useEffect, useState } from "react";

function UseEffectTest() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Use effect happened");
  // }, [count]);

  useEffect(() => {
    console.log("Empty useEffect happened");

    return () => {
      console.log("Use effect return fuction happened");
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

export default UseEffectTest;
