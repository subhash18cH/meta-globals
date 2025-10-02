import { Home, User, Settings, LogOut, Bell, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("JWT");
    navigate("/");
  };

  const menuItemBase = "flex items-center sm:space-x-3 justify-center sm:justify-start p-2 rounded cursor-pointer transition-colors duration-200";

  const menuItems = [
    { icon: <Home size={20} />, label: "Home", hover: "hover:bg-[#7677d7] hover:text-white" },
    { icon: <Bell size={20} />, label: "Notifications", hover: "hover:bg-[#7677d7] hover:text-white" },
    { icon: <MessageSquare size={20} />, label: "Messages", hover: "hover:bg-[#7677d7] hover:text-white" },
    { icon: <User size={20} />, label: "Profile", hover: "hover:bg-[#7677d7] hover:text-white" },
    { icon: <Settings size={20} />, label: "Settings", hover: "hover:bg-[#7677d7] hover:text-white" },
    { icon: <LogOut size={20} />, label: "Logout", hover: "hover:bg-red-500 hover:text-white", onClick: handleLogout, textColor: "text-red-500" },
  ];

  return (
    <div className="w-16 sm:w-48 dark:shadow-lg p-2 sm:p-4 mt-20 flex flex-col justify-between dark:bg-zinc-900 dark:text-white">
      <ul className="space-y-4 mt-2">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={`${menuItemBase} ${item.hover} ${item.textColor || ""}`}
            onClick={item.onClick}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left">
        <span className="hidden sm:inline">MetaGlobals &copy; 2025</span>
        <span className="sm:hidden">&copy; 2025</span>
      </div>
    </div>
  );
}
