import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center space-x-8 py-4 text-dark">
        <li>
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/experience" className="hover:text-gray-500">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-gray-500">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-500">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
