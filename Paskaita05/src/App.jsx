import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";

const API_HOST = import.meta.env.VITE_API_HOST;

const linksArray = [
  { link: "/home", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
];

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    axios
      .get(API_HOST)
      .then((res) => setCharacters(res.data))
      .catch((err) => console.log(err));
  }, []);
  // Sena sintakse
  // const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));
  // Nauja sintakse
  // const sortedCharacters1 = characters.toSorted((a, b) => a.name.localeCompare(b.name));

  const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchInputValue.toLowerCase()));

  function addCharacter() {
    setCharacters((prev) => [
      {
        id: "lkasjdf",
        name: "New character",
        yearOfBirth: 2024,
      },
      ...prev,
    ]);
  }

  return (
    <div>
      <Header links={linksArray} />
      <button onClick={addCharacter}>Add character</button>
      <input type="text" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
      <Wrapper characters={filteredCharacters} />
    </div>
  );
}

export default App;
