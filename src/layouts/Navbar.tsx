import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Class Schedule", path: "/schedule" },
    { name: "Budget Tracker", path: "/budget" },
    { name: "Exam Q&A", path: "/exam" },
    { name: "Study Planner", path: "/planner" },
    { name: "CGPA calculator", path: "/gpa" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-3 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#37353E]/80 shadow-md" : "bg-[#37353E]"
      } text-white flex justify-between items-center`}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold">🎓 Student Life Toolkit</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `hover:text-yellow-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {user ? (
          <>
            <span className="font-semibold text-yellow-300">{user.name}</span>
            <button
              onClick={logout}
              className="ml-2 px-3 py-1 bg-red-500 rounded text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="hover:text-yellow-300 transition font-semibold"
          >
            Login
          </NavLink>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#37353E] flex flex-col md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 border-b border-gray-700 hover:bg-[#4a4a5c] transition ${
                  isActive ? "font-semibold bg-[#4a4a5c]" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {user ? (
            <div className="px-6 py-3 flex items-center justify-between">
              <span className="font-semibold text-yellow-300">{user.name}</span>
              <button
                onClick={logout}
                className="px-3 py-1 bg-red-500 rounded text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-[#4a4a5c] transition font-semibold"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
