import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
        "label": "Home",
        "href": "#/",
        "isCTA": false
    },
    {
        "label": "Blog",
        "href": "#/blog",
        "isCTA": false
    },
    {
        "label": "Projects",
        "href": "#/projects",
        "isCTA": false
    },
    {
        "label": "Resume",
        "href": "#resume",
        "isCTA": true
    }
];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Name */}
          <a href="#/" className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 border border-border flex items-center justify-center font-mono text-xs sm:text-sm">
              NK
            </div>
            <span className="font-mono text-sm sm:text-base">Niraj Kamal K</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 font-mono transition-colors border-l border-border first:border-l-0 ${
                  item.isCTA
                    ? "bg-accent-orange text-accent-orange-foreground hover:opacity-80"
                    : "hover:bg-foreground hover:text-background"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`block px-4 py-3 font-mono transition-colors border-b border-border last:border-b-0 ${
                  item.isCTA
                    ? "bg-accent-orange text-accent-orange-foreground hover:opacity-80"
                    : "hover:bg-foreground hover:text-background"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
