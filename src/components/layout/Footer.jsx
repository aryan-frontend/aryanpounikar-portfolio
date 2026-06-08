import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-900 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold gradient-text">
          Aryan Pounikar
        </h2>

        <p className="text-gray-400 mt-2">
          Frontend Developer
        </p>

        <p className="text-gray-500 max-w-md mx-auto mt-4">
          Building responsive and modern web experiences
          with React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <Link
            href="https://github.com/aryan-frontend"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={24} />
          </Link>

          <Link
            href="https://linkedin.com/in/aryan-pounikar-40a617315"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={24} />
          </Link>

          <Link
            href="mailto:pounikararyan@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaEnvelope size={24} />
          </Link>
        </div>

        <div className="w-24 h-[1px] bg-gray-700 mx-auto my-8"></div>

        <p className="text-sm text-gray-500">
          © 2026 Aryan Pounikar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}