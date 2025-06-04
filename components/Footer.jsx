"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-full h-full" />,
      link: `https://www.instagram.com/vinugoredev?utm_source=qr&igsh=cjBrcjNuY21zcWw2`,
    },
    {
      icon: <FaXTwitter className="w-full h-full" />,
      link: "https://x.com/vinugoredev",
    },
    {
      icon: <FaLinkedin className="w-full h-full" />,
      link: "https://www.linkedin.com/in/vinayak-gore-b85b7922a/",
    },
    {
      icon: <FaGithub className="w-full h-full" />,
      link: "https://github.com/TheVinayakGore",
    },
    {
      icon: <FaFacebook className="w-full h-full" />,
      link: "https://www.facebook.com/profile.php?id=61561190855256&mibextid=ZbWKwL",
    },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-7 border-t-4 w-full">
      <section className="flex flex-col md:flex-row gap-10 items-start justify-between px-6 sm:px-10">
        {/* Logo & Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-extrabold">✦ AI Code Reviewer</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Analyze and optimize your code with our AI-powered code reviewer.
            Get detailed feedback and suggestions to make your code more
            efficient, clean, and maintainable.
          </p>
        </div>

        {/* Social & CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end gap-4">
          <h3 className="text-xl sm:text-2xl font-extrabold">
            Stay Tuned for updates
          </h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener"
              >
                <button className="transition hover:scale-110 cursor-pointer p-2 opacity-60 hover:opacity-100 border border-zinc-500 rounded-md w-10 h-10 hover:bg-blue-500 hover:text-white">
                  {item.icon}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="text-center text-sm mt-10 border-t pt-6 text-zinc-600 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} AI Code Reviewer. All rights reserved.
      </section>
    </footer>
  );
};

export default Footer;
