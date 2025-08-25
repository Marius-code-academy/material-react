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

  const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchInputValue.toLowerCase()));

  return (
    <div>
      <Header links={linksArray} />
      <input type="text" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
      <Wrapper characters={filteredCharacters} />
    </div>
  );
}

export default App;
