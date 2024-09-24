import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute p-2">
      <ul className="flex flex-col text-[rgb(61,82,161)]">
        {["Home", "Experience", "Skills", "Projects"].map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out relative"
            >
              {item}
              {index < 3 && (
                <span className="block h-1 w-full bg-[rgb(134,151,195)] mt-2 transition-all duration-300 transform scale-y-0 hover:scale-y-100" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
