import React, { useState } from "react";
import { Link as LinkRoll  } from "react-scroll";
import { styles } from "../../styles";
import { navLinks } from "../../Constants";
import { logo } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-[100vw] flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <AnimatePresence>
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.img
              className="w-100 h-12 object-contain"
              key={logo}
              src={logo}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              whileTap={{ translateX: 10 }}
            />
          </Link>
        </AnimatePresence>
        <ul className="list-none hidden xl:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }  hover:text-white text-[18px] font-medium cursor-pointer`}
              
            >
              {link.title === "Team" ? <Link to="/team">{link.title}</Link> : <LinkRoll to={link.id} spy={true} smooth={true} offset={-100} duration={500} onClick={() => setActive(link.title)}><Link to="/">{link.title}</Link></LinkRoll>}
            </li>
          ))}
        </ul>
        <div className="block xl:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
