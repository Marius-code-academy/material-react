import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Main from "./pages/Main/Main";
import Page404 from "./pages/Page404/Page404";
import Header from "./components/Header/Header";
import Item from "./pages/Item/Item";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
