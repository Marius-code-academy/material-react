import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import MapExample from "./components/MapExample/MapExample";
import Something from "./components/Something/Something";

function App() {
  return (
    <div>
      <Something
        imgSrc={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/960px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"
        }
        imgAlt={"Toyota"}
      />
      <Button onClick={() => console.log("Paspaustas mygtukas 1")} text={"Click me!"} />
      <Container>
        <h1>this is child 1</h1>
        <h2>this is child 2</h2>
      </Container>
      <Card cardBody={"sdhfoaisudhf"} />
      <MapExample />
    </div>
  );
}

export default App;
