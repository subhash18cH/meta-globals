import { useEffect, useState } from "react";
import logo from "/src/assets/logo.png";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {

  type USER = {
    name: string;
    email: string;
  };

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      return savedTheme === "dark";
    }
    return document.documentElement.classList.contains("dark");
  });

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", !isDark);
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
  };

  const [user, setUser] = useState<USER>();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="shadow-sm dark:shadow-lg dark:bg-zinc-900 fixed w-full h-20">
      <div className="flex justify-between items-center p-2 sm:p-3">

        {/* Logo */}
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <img
            src={logo}
            alt="logo"
            className="rounded-full p-1 sm:p-2 bg-[#5052ce] w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
          />
          <span className="font-bold text-base sm:text-xl md:text-2xl lg:text-2xl text-[#5052ce]">
            Meta Globals
          </span>
        </div>

        <div className="flex space-x-2 sm:space-x-4 md:space-x-8 items-center mr-2 sm:mr-4 md:mr-14">
          <button
            onClick={toggleTheme}
            className="p-1 sm:p-2 rounded-lg transition-colors text-slate-700"
          >
            {isDark ? <Sun className="text-yellow-600" size={20} /> : <Moon size={20} />}
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3 relative group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#5052ce] flex items-center justify-center text-white font-semibold cursor-pointer text-sm sm:text-base">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {/* Tooltip */}
            <div className="absolute top-12 sm:top-14 right-0 sm:-right-12 bg-[#7677d7] text-white text-xs sm:text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap z-50">
              <span className="font-bold text-sm sm:text-base block">Name: {user?.name}</span>
              <span className="font-bold text-sm sm:text-base block">Email: {user?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;