import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            setActive(navLinks[i].id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("/");
              window.scrollTo(0, 0);
            }}
          >
            <img className="h-9 w-9 object-contain" src={logo} alt="logo" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">Mohit Harne</p>
          </Link>

          {/* Desktop Nav */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  className={`${
                    active === link.id
                      ? "text-white text-border scale-110 text-glow"
                      : "text-secondary"
                  } text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                  onClick={() => setActive(link.id)}
                >
                  {link.title}
                </a>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transition-all duration-300 ${
                    active === link.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Nav */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.id} className="relative group">
                    <a
                      href={`#${link.id}`}
                      className={`${
                        active === link.id ? "text-white" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.id);
                      }}
                    >
                      {link.title}
                    </a>
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transition-all duration-300 ${
                        active === link.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Running Banner */}
      <div className="w-full bg-yellow-300 text-black py-1 overflow-hidden fixed top-[80px] z-10">
        <p className="animate-marquee whitespace-nowrap font-semibold text-center">
          🚧 Website Under Construction 🚧 Website Under Construction 🚧 Website Under Construction 🚧
        </p>
      </div>
    </>
  );
};

export default Navbar;
