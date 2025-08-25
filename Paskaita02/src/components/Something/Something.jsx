import { useState } from "react";
import styles from "./Something.module.css";

function Something({ imgSrc, imgAlt }) {
  const [state, setState] = useState(10);
  const [name, setName] = useState("Marius");

  function addOne() {
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
  }

  return (
    <>
      <div>
        <img src={imgSrc} alt={imgAlt} />
        <h1 className={styles.greenText}>{state}</h1>
      </div>
      <div>
        <button onClick={addOne}>Add 1</button>
      </div>
    </>
  );
}

export default Something;
