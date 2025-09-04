import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Class Schedule", path: "/schedule" },
    { name: "Budget Tracker", path: "/budget" },
    { name: "Exam Q&A", path: "/exam" },
    { name: "Study Planner", path: "/planner" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-[#37353E] text-white shadow-md">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">🎓 Student Life Toolkit</h1>

      {/* Nav Links */}
      <div className="flex gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
