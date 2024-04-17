import { NavLink } from "react-router-dom";
import "../Components/NavBar.css";

function NavBar () {
    return(
    <nav className="navbar">
        <NavLink to="/" className="nav-link" > Home</NavLink>
        <NavLink to="/cryptidlist" className="nav-link">Cryptids</NavLink>
    </nav>
)}

export default NavBar