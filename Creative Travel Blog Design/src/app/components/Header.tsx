import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/destinations", label: "Destinations" },
    { path: "/stories", label: "Stories" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Globe circle */}
                <circle cx="24" cy="24" r="20" fill="url(#gradient1)" className="group-hover:opacity-90 transition-opacity"/>
                {/* Latitude lines */}
                <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#fff" strokeWidth="1.5" fill="none"/>
                <ellipse cx="24" cy="24" rx="20" ry="14" stroke="#fff" strokeWidth="1.5" fill="none"/>
                {/* Longitude line */}
                <path d="M 24 4 Q 16 24 24 44" stroke="#fff" strokeWidth="1.5" fill="none"/>
                <path d="M 24 4 Q 32 24 24 44" stroke="#fff" strokeWidth="1.5" fill="none"/>
                {/* Airplane */}
                <path d="M 36 12 L 34 14 L 30 13 L 28 15 L 30 16 L 29 17 L 26 16 L 25 17 L 27 19 L 30 22" 
                      stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                <defs>
                  <linearGradient id="gradient1" x1="4" y1="4" x2="44" y2="44">
                    <stop offset="0%" stopColor="#FF6B6B"/>
                    <stop offset="50%" stopColor="#FF8E53"/>
                    <stop offset="100%" stopColor="#FFA726"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Wanderlust Tales
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Explore. Dream. Discover.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-all hover:text-orange-500 relative ${
                  isActive(link.path) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-lg font-medium transition-colors ${
                  isActive(link.path) ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
