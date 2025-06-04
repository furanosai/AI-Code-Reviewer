"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSun } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-500 bg-zinc-50 dark:bg-zinc-900 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="text-xl font-bold">AI Code Reviewer</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Add nav links here if needed */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 cursor-pointer rounded-lg border border-zinc-500 bg-white/[0.3] dark:bg-zinc-900/[0.3] backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
          >
            {theme === "dark" ? (
              <HiOutlineSun className="h-5 w-5" />
            ) : (
              <IoMoonOutline className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <HiOutlineX className="w-7 h-7" />
            ) : (
              <HiOutlineMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 transition-all">
          {/* Add nav links here if needed */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full flex justify-start items-center gap-2 p-2 border border-zinc-500 rounded-lg bg-white/[0.3] dark:bg-zinc-900/[0.3] backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
          >
            {theme === "dark" ? (
              <>
                <HiOutlineSun className="h-5 w-5" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <IoMoonOutline className="h-5 w-5" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
