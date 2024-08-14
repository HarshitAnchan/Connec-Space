import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-6 shadow-md dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Connect with Us</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://x.com/HarshitAnchan02"
                aria-label="Twitter"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshitanchan/"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/HarshitAnchan"
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ConnecSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
