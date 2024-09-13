import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <main className="navbar-up">
        <Link to="/">MAIN</Link>
        <Link to="/staff-practice">STAFF</Link>
        <Link to="/intervals">INTERVALS</Link>
        <Link to="/singing">SINGING</Link>
        <Link to="/dictation">DICTATION</Link>
      </main>
    </>
  );
};
