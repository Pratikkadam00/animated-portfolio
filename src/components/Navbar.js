import { useState } from "react";
import { Link } from "react-router-dom";
import useWidthResize from "../hooks/useWidthResize";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const toggleHamburger = () => setOpen(!open);
  useWidthResize(() => {
    setOpen(false); // Add any action you want to perform
  });
  return (
    <div className="absolute left-0 top-0 bottom-0 flex items-center w-fit md:px-10">
      <div className="absolute top-5 left-5 md:hidden">
        <div
          id="hamburger"
          className="relative w-14 h-14 rounded-3xl bg-[rgb(55,64,95)] flex items-center justify-center"
        >
          <button
            className="w-10 h-10 rounded-2xl bg-[rgb(31,38,65)] text-white"
            onClick={toggleHamburger}
          >
            {!open ? "☰" : "✖"}
          </button>
        </div>
      </div>

      <nav
        className={`p-2 ${
          open ? "absolute z-20 bg-red-500" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col text-[rgb(61,82,161)]">
          {["Home", "Experience", "Skills", "Projects"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out relative"
              >
                {item}
                {/* {index < 3 && (
                <span className="block h-1 w-full bg-[rgb(134,151,195)] mt-2 transition-all duration-300 transform scale-y-0 hover:scale-y-100" />
                )} */}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
