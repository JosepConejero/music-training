import { Link } from "react-router-dom";
import "./SideMenu.css";
import { useEffect } from "react";

export const SideMenu = ({ isSideMenuVisible, hideSideMenu }) => {
  useEffect(() => {
    console.log(isSideMenuVisible);
  }, [isSideMenuVisible]);

  return (
    <>
      {isSideMenuVisible && (
        <>
          <div className="fondo" onClick={hideSideMenu}></div>
          {/* <div className="menu"> */}
          <div className={`menu ${isSideMenuVisible ? "expanded" : "merdaputa"}`}>
            <ul>
              <li onClick={hideSideMenu}>
                <Link to="/">Main</Link>
              </li>
              <li onClick={hideSideMenu}>
                <Link to="/staff-practice">Staff</Link>
              </li>
              <li onClick={hideSideMenu}>
                <Link to="/intervals">Intervals</Link>
              </li>
              <li onClick={hideSideMenu}>
                <Link to="/easy-intervals">Easy Intervals</Link>
              </li>
              <li onClick={hideSideMenu}>
                <Link to="/rythms">Rythms</Link>
              </li>
              <li onClick={hideSideMenu}>
                <Link to="/chords">Chords</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
