import { useEffect, useState } from "react";
import { cn } from "../lib/util";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

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
      <header className="h-[70px] flex items-center justify-between">
        <a href="/" className="font-semibold">
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
        <div className="flex items-center">
          <a
            href="mailto:theshanumalik@gmail.com"
            className="hidden lg:flex items-center gap-1 rounded-lg py-1 px-3 pr-4 bg-yellow-400 transition-colors hover:bg-opacity-85"
          >
            Contact
          </a>
          <button
            className="absolute z-50 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </header>
      {open && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white grid place-items-center"
          variants={menuVariants}
          animate={"visible"}
          initial={"hidden"}
        >
          <ul>
            <motion.li
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
            >
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
                    "flex items-center text-gray-400 hover:text-gray-900 transition-colors py-1 px-2 font-semibold",
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
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
