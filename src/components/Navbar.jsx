import { Link } from "react-router-dom";
import "./Navbar.css";
import { SideMenu } from "./SideMenu";
import { useState } from "react";

export const Navbar = () => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
  };

  const hideSideMenu = () => {
    setIsSideMenuVisible(false);
  };

  return (
    <>
      <SideMenu isSideMenuVisible={isSideMenuVisible} hideSideMenu={hideSideMenu}></SideMenu>
      <main className="navbar navbar-up">
        <button className="hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>
        <Link to="/">MAIN</Link>
        <Link to="/staff-practice">STAFF</Link>
        <Link to="/intervals">INTERVALS</Link>
        <Link to="/easy-intervals">EASY INTERVALS</Link>
        <Link to="/rythms">RYTHMS</Link>
        <Link to="/chords">CHORDS</Link>
      </main>
    </>
  );
};
