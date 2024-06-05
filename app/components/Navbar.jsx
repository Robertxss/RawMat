"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <nav className="w-full px-8 py-10 flex fixed justify-between sm:justify-start z-50 bg-[#f3f6f9]">
        <div className="logo text-2xl font-medium">
          <span className="logo-start">Raw </span>
          <span className="logo-end">Mat</span>
        </div>
        <div className="navigation gap-8 justify-between ml-auto font-medium items-center hidden sm:flex">
          <a href="#" className="nav-link">
            Acasă
          </a>
          <a href="#mester" className="nav-link">
            Meșter
          </a>
          <a href="#material" className="nav-link">
            Materiale
          </a>
          <a href="#" className="nav-link">
            Consultanță
          </a>
        </div>
        <div
          className="hamburger-menu w-[30px] h-[30px] flex flex-col gap-2 sm:hidden cursor-pointer"
          onClick={handleToggle}
        >
          <motion.div
            className="line w-full h-[3px] bg-black"
            animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
          />
          <motion.div
            className="line w-full h-[3px] bg-black"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            className="line w-full h-[3px] bg-black"
            animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
          />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#f3f6f9] flex flex-col z-40 pt-36 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <a
              href="#"
              onClick={handleToggle}
              className="nav-link mb-4 text-2xl w-max"
            >
              Acasă
            </a>
            <a
              href="#mester"
              onClick={handleToggle}
              className="nav-link mb-4 text-2xl w-max"
            >
              Meșter
            </a>
            <a
              href="#material"
              onClick={handleToggle}
              className="nav-link mb-4 text-2xl w-max"
            >
              Materiale
            </a>
            <a
              href="#"
              onClick={handleToggle}
              className="nav-link mb-4 text-2xl w-max"
            >
              Consultanță
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
