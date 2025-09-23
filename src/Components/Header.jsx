import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [doginalOpen, setDoginalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Blog", "Schedule", "Contact"];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-[#121212]/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <a href="/" className="flex items-center gap-x-2.5">
            <img
              src="/brightmxta.png"
              alt="BrightMxta Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <h1
              className="text-base sm:text-lg md:text-xl text-[#38F9DB] pt-1 sm:pt-2"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              BrightMxta
            </h1>
          </a>
        </motion.div>

        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-gray-200 font-medium items-center text-sm lg:text-base">
          {navItems.map((item, index) => {
            const path =
              item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={path}
                  className={`relative px-1 sm:px-2 py-1 transition duration-300 ${
                    isActive ? "text-[#38F9DB]" : "hover:text-[#38F9DB]"
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:w-0 after:h-[2px] after:bg-[#38F9DB]
                  after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item}
                </Link>
              </motion.li>
            );
          })}

          <li
            className="relative group"
            onMouseEnter={() => setDoginalOpen(true)}
            onMouseLeave={() => setDoginalOpen(false)}
          >
            <button className="flex items-center gap-1 px-2 py-1 hover:text-[#38F9DB] transition duration-300">
              Doginal Dogs <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {doginalOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute text-center left-0 mt-2 w-40 sm:w-48 bg-[#1a1a1a] border border-[#38F9DB]/30 rounded-lg shadow-lg text-gray-200 text-sm"
                >
                  <li>
                    <a
                      href="https://cryptospaces.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 sm:px-4 py-2 hover:bg-[#38F9DB]/20"
                    >
                      CSN
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.doginaldogs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 sm:px-4 py-2 hover:bg-[#38F9DB]/20"
                    >
                      Join DoginalDogz
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.doginaldogs.com/how-to-buy-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 sm:px-4 py-2 hover:bg-[#38F9DB]/20"
                    >
                      Buy DoginalDogz
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.doginaldogs.com/join-the-community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 sm:px-4 py-2 hover:bg-[#38F9DB]/20"
                    >
                      Join Community
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121212] border-t border-[#38F9DB] text-gray-200 px-4 sm:px-6 py-4 space-y-4 text-sm sm:text-base"
          >
            {navItems.map((item) => {
              const path =
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <Link
                  key={item}
                  to={path}
                  className={`block transition ${
                    isActive ? "text-[#38F9DB]" : "hover:text-[#38F9DB]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            <div>
              <button
                onClick={() => setDoginalOpen(!doginalOpen)}
                className="flex items-center justify-between w-full px-2 py-2 hover:text-[#38F9DB]"
              >
                Doginal Dogs <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {doginalOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2 sm:ml-4 mt-2 space-y-2 text-sm sm:text-base"
                  >
                    <li>
                      <a
                        href="https://doginaldogs.com/cdns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-2 py-1 hover:text-[#38F9DB]"
                      >
                        CSN
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doginaldogs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-2 py-1 hover:text-[#38F9DB]"
                      >
                        Join DoginalDogz
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doginaldogs.com/how-to-buy-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-2 py-1 hover:text-[#38F9DB]"
                      >
                        Buy DoginalDogz
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doginaldogs.com/join-the-community"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-2 py-1 hover:text-[#38F9DB]"
                      >
                        Join DoginalDogz Community
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
