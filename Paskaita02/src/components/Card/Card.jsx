import { useState } from "react";

function Card({ cardTitle, cardBody }) {
  const [showTitle, setShowTitle] = useState(true);

  function toggleShowTitle() {
    setShowTitle((prev) => !prev);
  }

  return (
    <div>
      {/* {cardTitle && <h2>{cardTitle}Card Title</h2>} */}
      {cardTitle ? <h2>{cardTitle}</h2> : "Nera title"}
      <p>{cardBody}</p>
      <button onClick={toggleShowTitle}>Show title</button>
    </div>
  );
}

export default Card;
