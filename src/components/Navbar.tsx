import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon, ArrowRight } from "lucide-react";
import { businessInfo } from "../data/business";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Bakery", href: "#bakery" },
    { label: "Coffee", href: "#drinks" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#visit" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 dark:bg-[#120B07]/95 backdrop-blur-md shadow-sm border-b border-[#231711]/10 dark:border-[#FAF7F2]/10 py-3"
          : "bg-[#FAF7F2] dark:bg-[#120B07] border-b border-[#231711]/5 dark:border-[#FAF7F2]/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <a
            href="#home"
            className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59445] rounded-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-semibold text-[#231711] dark:text-[#FAF7F2] group-hover:text-[#8C6D58] dark:group-hover:text-[#E5B869] transition-colors leading-none">
              {businessInfo.name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.32em] font-medium text-[#8C6D58] dark:text-[#C59445] mt-1 uppercase">
              {businessInfo.subName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#4A3B32] dark:text-[#DDD3C7] hover:text-[#231711] dark:hover:text-[#FAF7F2] transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C59445]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle, Direct Call, Order CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              className="p-2 sm:p-2.5 rounded-full text-[#4A3B32] dark:text-[#DDD3C7] hover:bg-[#231711]/5 dark:hover:bg-[#FAF7F2]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59445]"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[#8C6D58] transition-transform duration-300 rotate-0 hover:-rotate-12" />
              ) : (
                <Sun className="w-4 h-4 text-[#E5B869] transition-transform duration-300 rotate-0 hover:rotate-45" />
              )}
            </button>

            {/* Call button */}
            <a
              href={`tel:${businessInfo.rawPhone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A3B32] dark:text-[#DDD3C7] hover:text-[#231711] dark:hover:text-[#FAF7F2] transition-colors px-3 py-2 rounded-full border border-[#231711]/15 dark:border-[#FAF7F2]/15 hover:border-[#C59445]"
              title="Call café directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59445]" />
              <span className="font-mono tabular-nums">{businessInfo.phone}</span>
            </a>

            {/* Primary Order / Contact CTA */}
            <button
              onClick={onOpenContact}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#FAF7F2] dark:text-[#120B07] bg-[#231711] dark:bg-[#FAF7F2] hover:bg-[#3A2A20] dark:hover:bg-[#FFFFFF] active:scale-[0.98] transition-all rounded-full shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59445] whitespace-nowrap"
            >
              Order / Contact
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#231711] dark:text-[#FAF7F2] hover:bg-[#231711]/5 dark:hover:bg-[#FAF7F2]/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59445]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] dark:bg-[#120B07] border-b border-[#231711]/10 dark:border-[#FAF7F2]/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif font-medium text-[#231711] dark:text-[#FAF7F2] hover:text-[#C59445] py-2 border-b border-[#231711]/5 dark:border-[#FAF7F2]/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#8C6D58]" />
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-3 flex flex-col gap-2.5">
            <a
              href={`tel:${businessInfo.rawPhone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#231711] dark:text-[#FAF7F2] bg-[#F5EFEB] dark:bg-[#1C120C] rounded-xl border border-[#231711]/10 dark:border-[#FAF7F2]/10"
            >
              <Phone className="w-4 h-4 text-[#C59445]" />
              <span>Call: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
