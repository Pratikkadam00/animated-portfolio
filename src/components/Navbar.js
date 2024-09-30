import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWidthResize from "../hooks/useWidthResize";

const Navbar = () => {
  const [open, setOpen] = useState(false); // Default state is closed
  const [startX, setStartX] = useState(null); // Store the touch start X-coordinate

  const toggleHamburger = () => setOpen(!open);

  // Close the menu on resize (optional)
  useWidthResize(() => {
    setOpen(false);
  });

  // Detect swipe left to close the menu
  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX); // Capture initial touch X position
    };

    const handleTouchMove = (e) => {
      if (startX && e.touches[0].clientX < startX - 50) {
        // Swipe left detection
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [startX, open]);

  return (
    <div className="absolute left-0 top-0 bottom-0 flex items-center w-fit md:px-10">
      {/* Hamburger button for mobile */}
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

      {/* Background overlay to close the menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setOpen(false)} // Clicking outside closes the menu
        ></div>
      )}

      {/* Sliding Navigation Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 bg-[rgb(55,64,95)] transition-transform duration-500 ease-in-out transform rounded-2xl ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
        style={{ height: "auto" }} // Dynamic height adjustment
      >
        <nav className="p-6">
          <ul className="space-y-6 text-white">
            {["Home", "Experience", "Skills", "Projects"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out rounded-xl"
                  onClick={() => setOpen(false)} // Close the menu on link click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Keep the nav for web view untouched */}
      <nav className="p-2 hidden md:flex">
        <ul className="flex md:flex-col text-[rgb(61,82,161)]">
          {["Home", "Experience", "Skills", "Projects"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out relative rounded-xl"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
