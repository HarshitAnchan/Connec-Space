"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/HarshitAnchan" },
  { icon: Twitter, href: "https://x.com/HarshitAnchan02" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/harshitanchan/" },
];

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

export default function AnimatedFooter() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M20 5L5 20L20 35L35 20L20 5Z"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          <motion.div
            className="flex space-x-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                <link.icon size={24} />
              </FooterLink>
            ))}
          </motion.div>
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            © {new Date().getFullYear()} ConnecSpace. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
