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
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-10 w-full">
      <section className="flex items-center justify-between px-20 w-full">
        {/* Logo & Description */}
        <div className="w-1/3">
          <h2 className="text-2xl font-extrabold">✦ AI Code Reviewer</h2>
          <p className="mt-2 text-sm">
            Analyze and optimize your code with our AI-powered code reviewer.
            Get detailed feedback and suggestions to make your code more
            efficient, clean, and maintainable.
          </p>
        </div>

        {/* Social & CTA */}
        <div className="flex flex-col items-end justify-center gap-2 w-1/2">
          <h3 className="text-2xl font-extrabold">Stay Tuned for updates</h3>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener"
              >
                <button className="transition hover:scale-125 cursor-pointer p-2 opacity-50 hover:opacity-100 hover:border-blue-500 hover:bg-blue-500 hover:text-white border border-zinc-500 rounded-md w-10 h-10">
                  {item.icon}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="text-center text-sm mt-8 border-t pt-6">
        &copy; {new Date().getFullYear()} AI Code Reviewer. All rights reserved.
      </section>
    </footer>
  );
};

export default Footer;
