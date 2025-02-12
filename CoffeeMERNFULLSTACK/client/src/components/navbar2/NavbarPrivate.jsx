import { Link } from "react-router-dom";
import './navbarprivate.css';

export const NavbarPrivate = () => {
  return (
    <nav className="navbar-private">
      <div className="nav-private-top">
        <Link to="/admin">Admin</Link>
        <Link to="/">Home</Link>
      </div>

      <div className="nav-private-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admincontact">Contact</Link>
        <Link to="/adminabout">About</Link>
      </div>
    </nav>
  );
};
