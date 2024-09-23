import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute p-2">
      <ul className="flex flex-col space-y-6 text-[rgb(61,82,161)]">
        <li>
          <Link
            to="/"
            className="px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out rounded-xl shadow-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className="px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out rounded-xl shadow-lg"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out rounded-xl shadow-lg"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out rounded-xl shadow-lg"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
