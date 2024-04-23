import { NavLink } from "react-router-dom";
import "../Components/NavBar.css";

function NavBar () {
    return(
    <nav className="navbar">
        <NavLink to="/" className="nav-link" > Home</NavLink>
        <NavLink to="/cryptidlist" className="nav-link">Cryptids</NavLink>
        <NavLink to="/submissions" className="nav-link">Submissions</NavLink>
    </nav>
)}

export default NavBar