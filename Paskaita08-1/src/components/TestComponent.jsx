import { memo } from "react";

function TestComponent({ name, doStuff }) {
  console.log("TestComponent rendered");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default memo(TestComponent);
