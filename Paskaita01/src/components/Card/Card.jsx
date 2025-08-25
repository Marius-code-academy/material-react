function Card({ header, body }) {
  // desctructuring pvz
  // const x = { header: "asdfasdf", antras: "antras propertis" };
  // const { header, antras } = x;

  return (
    <div className="card">
      <h4>{header}</h4>
      <p>{body}</p>
      <div>This is a card footer</div>
    </div>
  );
}

export default Card;
