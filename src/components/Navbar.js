import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWidthResize from "../hooks/useWidthResize";

// SVG icons for menu items
const icons = {
  home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7m-9 8V9m4 4v5h5V10.414a1 1 0 00-.293-.707l-7-7a1 1 0 00-1.414 0l-7 7A1 1 0 003 10.414V19a1 1 0 001 1h5z"
      />
    </svg>
  ),
  experience: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v11a2 2 0 002 2z"
      />
    </svg>
  ),
  skills: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3a6 6 0 000 12h4.5a6 6 0 000-12h-4.5zm-6 18h16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-16.5A1.5 1.5 0 002.25 16.5v3A1.5 1.5 0 003.75 21z"
      />
    </svg>
  ),
  projects: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4H8l4-4 4 4h-3v4zm7-4h-3v8H7v-8H4l8-8 8 8z"
      />
    </svg>
  ),
};

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
        className={`fixed top-0 left-0 w-54 bg-gradient-to-br from-[rgb(55,64,95)] to-[rgb(31,38,65)] transition-transform duration-500 ease-in-out transform rounded-r-lg shadow-xl ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
        style={{ height: "auto" }} // Dynamic height adjustment
      >
        <nav className="p-6">
          <ul className="space-y-6 text-white font-bold">
            {[
              { name: "Home", icon: icons.home },
              { name: "Experience", icon: icons.experience },
              { name: "Skills", icon: icons.skills },
              { name: "Projects", icon: icons.projects },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  className="flex items-center px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out rounded-xl"
                  onClick={() => setOpen(false)} // Close the menu on link click
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Keep the nav for web view untouched */}
      <nav className="p-2 hidden md:flex">
        <ul className="flex md:flex-col text-[rgb(61,82,161)]">
          {[
            { name: "Home", icon: icons.home },
            { name: "Experience", icon: icons.experience },
            { name: "Skills", icon: icons.skills },
            { name: "Projects", icon: icons.projects },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.name.toLowerCase()}`}
                className="flex items-center px-6 py-3 text-lg font-semibold hover:bg-[rgb(134,151,195)] hover:text-white transition duration-300 ease-in-out relative rounded-xl"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
