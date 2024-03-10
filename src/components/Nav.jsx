"use client";
import Link from "next/link";
import React, { useState } from "react";
import ToggleMode from "./ToggleMode";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const pathname = usePathname();
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let links = [
    {
      name: "Home",
      link: "/",
    },
    // {
    //   name: "About",
    //   link: "/about",
    // },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  return (
    <nav className="flex flex-col items-center mb-5 py-5 font-ubuntu">
      <div className="flex justify-between max-w-2xl w-full">
        <div className="flex items-center gap-5">
          <ToggleMode />
        </div>
        <div className="flex justify-center">
          {links.map((navLink, index) => (
            <Link key={navLink.name} href={navLink.link} onClick={() => setClickIndex(index)}>
              <div className="absolute inset-x-0 h-[3px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

              <p
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-md px-4 py-2 text-sm transition-all delay-150 hover:text-gray-900 ${
                  navLink.link === pathname ? "text-primary" : "text-gray-600"
                }`}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 rounded-sm bg-gray-100"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.25, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>{" "}
                <span className="relative z-10">{navLink.name}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
