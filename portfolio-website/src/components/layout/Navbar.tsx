import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Home } from "lucide-react";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-6 left-0 w-full flex justify-between items-center px-12 z-50">
      {/* Left: Home Icon */}
      <Link
        to="/"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
      >
        <Home className="w-5 h-5" />
      </Link>

      {/* Right: Navigation links */}
      <nav className="flex items-center gap-10">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              "text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200",
              location.pathname === to &&
                "text-white font-semibold underline underline-offset-4"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
