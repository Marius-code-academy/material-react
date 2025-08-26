import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/contacts"}>Contacts</Link>
      <Link to={"/home"}>Home</Link>
    </header>
  );
}

export default Header;
