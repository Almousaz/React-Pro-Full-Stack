import './navbar.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Product</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="nav-admin">
        <Link to="/login">Admin</Link>
      </div>
    </nav>
  );
};
