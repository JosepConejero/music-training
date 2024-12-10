import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <main className="navbar-up">
        <Link to="/">MAIN</Link>
        <Link to="/staff-practice">STAFF</Link>
        <Link to="/intervals">INTERVALS</Link>
        <Link to="/rythms">RYTHMS</Link>
        <Link to="/chords">CHORDS</Link>
      </main>
    </>
  );
};
