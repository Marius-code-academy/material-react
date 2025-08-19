const people = [
  { name: "Marius", age: 28, id: 1 },
  { name: "Jonas", age: 30, id: 2 },
  { name: "Petras", age: 25, id: 3 },
  { name: "Ona", age: 22, id: 4 },
];

function MapExample() {
  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <span>{person.age}</span>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default MapExample;
