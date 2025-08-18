import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const name = "Petras";

  function sayHello() {
    return "Laba diena";
  }

  return (
    <div className="green-background">
      <h1>labas</h1>
      <h2>{sayHello()}</h2>
      <img />
      <Card header={"this is a header from props"} body={1234} />
      <Card header={"cia jau kitoks header"} body={"this is a body"} />
    </div>
  );
}

export default App;
