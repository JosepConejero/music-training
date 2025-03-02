import { Link } from "react-router-dom";
import "./SideMenu.css";

export const SideMenu = ({isSideMenuVisible, hideSideMenu}) => {
 
  return (
    <>
    {isSideMenuVisible && (
        <>
        <div className="fondo" onClick={hideSideMenu}>
        </div> 
        <div className="menu">
          <ul>
            <li onClick={hideSideMenu}><Link to="/">Main</Link></li>
            <li onClick={hideSideMenu}><Link to="/staff-practice">Staff</Link></li>
            <li onClick={hideSideMenu}><Link to="/intervals">Intervals</Link></li>
            <li onClick={hideSideMenu}><Link to="/easy-intervals">Easy Intervals</Link></li>
            <li onClick={hideSideMenu}><Link to="/rythms">Rythms</Link></li>
            <li onClick={hideSideMenu}><Link to="/chords">Chords</Link></li>
          </ul>
        </div>
        </>
      )}
      </>
  )
}
