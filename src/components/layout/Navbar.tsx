import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SERVICES } from "../../data/content";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Testimoni", href: "/#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled || location.pathname !== "/"
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Link to="/" className="relative z-50 flex items-center justify-center">
          <img
            src="/assets/logo.png"
            alt="Butuh Apa Logo"
            className={cn(
              "absolute top-0 left-0 max-w-none h-auto object-contain drop-shadow-lg origin-top-left transition-all duration-300 hover:scale-105",
              isScrolled || location.pathname !== "/"
                ? "w-[100px] md:w-[120px] lg:w-[140px] mt-1" // Agar compact saat scroll, ada padding atas
                : "w-[140px] md:w-[180px] lg:w-[210px] mt-2" // Ukuran besar di 210px, dengan padding atas
            )}
          />
          {/* Invisible placeholder untuk maintain width di flexbox */}
          <div className={cn(
            "transition-all duration-300",
            isScrolled || location.pathname !== "/"
              ? "w-[100px] md:w-[120px] lg:w-[140px] h-12"
              : "w-[140px] md:w-[180px] lg:w-[210px] h-16"
          )} />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-gray-500 hover:text-primary-black transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-primary-red hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dropdown Layanan (Desktop) */}
          <div className="relative group">
            <Button size="sm" className="flex items-center gap-2">
              Pilih Layanan <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </Button>

            <div className="absolute top-full right-0 mt-2 w-60 bg-white border border-gray-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2 origin-top-right">
              {SERVICES.map(srv => (
                <Link
                  key={srv.id}
                  to={`/layanan/${srv.id}`}
                  className="px-4 py-3 text-sm font-bold text-gray-500 hover:text-primary-red hover:bg-red-50 rounded-xl transition-colors text-left flex items-center gap-3"
                >
                  <span className="text-primary-red opacity-80 [&>svg]:w-5 [&>svg]:h-5">
                    {srv.icon}
                  </span>
                  {srv.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-black p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <ul className="flex flex-col py-6 px-6 gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-lg font-bold uppercase tracking-wider text-primary-black hover:text-primary-red"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Dropdown Equivalent (Mobile) */}
              <li className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Layanan Kami</span>
                <div className="flex flex-col gap-2">
                  {SERVICES.map(srv => (
                    <Link
                      key={srv.id}
                      to={`/layanan/${srv.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-4 py-3 text-base font-bold text-primary-black hover:text-primary-red bg-gray-50 hover:bg-red-50 rounded-xl transition-colors border border-gray-100/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-primary-red [&>svg]:w-4 [&>svg]:h-4">
                        {srv.icon}
                      </div>
                      {srv.title}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
