"use client";

import Navlinks from "@/components/navbar/Navlinks";
import NavLeftSide from "@/components/navbar/NavLeftSide";
import Navlogo from "@/components/navbar/Navlogo";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import ContactUs from "@/components/ui/ContactUs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isNavScroll, setIsNavScroll] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setIsNavScroll(true);
    } else {
      setIsNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => window.removeEventListener("scroll", onNavScroll);
  }, []);

  // handle open modal contact
  let [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // handle animation navbar on scroll
  const { scrollY } = useScroll();
  const [isScrolling, setScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    if (scrollY.get() < scrollY.getPrevious()) setScrolling(false);
    if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious())
      setScrolling(true);
  };

  useEffect(() => {
    return scrollY.onChange(() => handleScroll());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: -75 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <>
      <motion.nav
        variants={variants}
        animate={isScrolling ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className={`${
          !isNavScroll
            ? "bg-[#F7F7F7] dark:bg-dark-4"
            : "fixed top-0 left-0 right-0 bg-white dark:bg-dark-4"
        } z-40 flex justify-between items-center lg:px-20 md:px-12 duration-200 ease-linear px-3 py-3 border-b border-gray/10`}
      >
        <Navlogo />
        <Navlinks />

        <NavLeftSide handelNav={handelNav} handleOpenModal={handleOpenModal} />
      </motion.nav>

      {/* Responsive navbar */}
      <ResponsiveNavbar nav={nav} handelNav={handelNav} />

      <ContactUs isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Navbar;
