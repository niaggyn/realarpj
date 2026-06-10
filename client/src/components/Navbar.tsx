/**
 * Navbar Component - RealAR
 * Design: Background preto, logo branco, menu simples, botão laranja
 * Fidelidade 100% ao protótipo
 */

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import Logo from "../img/logos/logo_small.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function updateOffset() {
      const el = document.getElementById("site-navbar");
      const h = el ? el.offsetHeight : 72;
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    }

    // Initial set and keep updated on resize and when menu toggles
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [isOpen]);
  

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Problema", href: "#problema" },
    { label: "Features", href: "#features" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav id="site-navbar" className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          +{" "}
          <img
            src={Logo}
            alt="RealAR logo"
            className="h-12 object-contain"
          />{" "}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-xs font-medium hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-2 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-[0.5vw] font-medium text-xs transition-colors">
            Acessar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-3">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-white text-xs font-medium hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full mt-3 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-medium">
            Acessar
          </button>
        </div>
      )}
    </nav>
  );
}
