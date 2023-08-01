import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/about">
        About
      </Link>
      <Link className="navLink" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
