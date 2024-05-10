import { useEffect, useState } from "react";
import { cn } from "../lib/util";
import { FaBars, FaCross } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const menuVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [pathname, setPathname] = useState("");
  const [open, setOpen] = useState(false);
  const navLinks = [
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/about" },
  ];
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <>
      <header className="h-[70px] w-full flex items-center justify-between px-2">
        <a href="/" className="font-semibold block">
          theshanumalik
        </a>
        <nav className="lg:block hidden">
          <ul className="flex gap-3">
            <li>
              <a
                href="/"
                className={cn(
                  "flex items-center text-gray-400 hover:text-gray-900 transition-colors py-1 px-2 font-semibold",
                  {
                    "text-gray-900": pathname === "/",
                  }
                )}
              >
                Home
              </a>
            </li>
            {navLinks.map((link) => (
              <li>
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center text-gray-400 hover:text-gray-900 transition-colors py-1 px-2 font-semibold",
                    {
                      "text-gray-900":
                        pathname !== "/" && pathname.startsWith(link.href),
                    }
                  )}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center relative">
          <a
            href="mailto:theshanumalik@gmail.com"
            className="hidden lg:flex items-center gap-1 rounded-lg py-1 px-3 bg-yellow-400 transition-colors hover:bg-opacity-85"
          >
            Contact
          </a>
          <button
            className="lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </header>
      {open && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white"
          variants={menuVariants}
          animate={"visible"}
          initial={"hidden"}
        >
          <div className="grid place-items-center w-full h-full relative">
            <button
              className="absolute top-5 right-5"
              onClick={() => setOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            <ul>
              <motion.li
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href="/"
                  className={cn(
                    "flex items-center text-gray-400 hover:text-gray-900 transition-colors py-1 px-2 font-semibold text-xl",
                    {
                      "text-gray-900": pathname === "/",
                    }
                  )}
                >
                  Home
                </a>
              </motion.li>
              {navLinks.map((link) => (
                <motion.li
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={link.href}
                    className={cn(
                      "flex items-center text-gray-400 hover:text-gray-900 transition-colors py-1 px-2 font-semibold text-xl",
                      {
                        "text-gray-900":
                          pathname !== "/" && pathname.startsWith(link.href),
                      }
                    )}
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
