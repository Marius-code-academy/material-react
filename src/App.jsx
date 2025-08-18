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
      <Card />
    </div>
  );
}

export default App;
