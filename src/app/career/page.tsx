"use client";

import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";

const careers = [
  {
    id: "apprentice",
    name: "EffetB",
    description: "Apprentice Full-Stack Developer",
    logo: "/assets/images/LogoEffetB.png",
    color: "bg-white",
    period: "2024 - Present",
    technologies: ["Symfony", "Vue.js", "MongoDB", "Docker"],
  },
  {
    id: "fullstack",
    name: "EffetB",
    description: "Full-Stack Developer",
    logo: "/assets/images/LogoEffetB.png",
    color: "bg-white",
    period: "2024",
    technologies: ["Symfony", "Vue.js", "MongoDB", "Docker"],
  },
  {
    id: "intern",
    name: "EffetB",
    description: "Intern Full-Stack Developer",
    logo: "/assets/images/LogoEffetB.png",
    color: "bg-white",
    period: "2024",
    technologies: ["Symfony", "Vue.js", "MongoDB", "Docker"],
  },
];

export default function Career() {
  const { theme, toggleTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <main
      className={`min-h-screen p-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-[550px] mx-auto">
        {/* Navigation Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-2xl p-3 mb-4 shadow-xl`}
        >
          <nav className="flex justify-between items-center">
            <div className="flex gap-3">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 ${
                    theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                  } rounded-xl transition-colors`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 ${
                  theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                } text-emerald-500 rounded-xl transition-colors`}
                aria-current="page"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2 ${
                  theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                } rounded-xl transition-colors`}
              >
                {theme === "dark" ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </motion.button>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    theme === "dark"
                      ? "bg-[#2C2C2C] hover:bg-[#363636]"
                      : "bg-gray-100 hover:bg-gray-200"
                  } px-4 py-2 rounded-xl font-medium transition-colors text-sm shadow-md`}
                >
                  Retour
                </motion.button>
              </Link>
            </div>
          </nav>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-6 shadow-xl`}
        >
          <div className="mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-1.5 mb-1.5"
            >
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span className="text-base font-medium">
                Mon parcours professionnel
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              Découvrez mon expérience professionnelle
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-0"
          >
            {careers.map((career, index) => (
              <motion.div key={career.id} variants={itemVariants}>
                <Link
                  href={`/career/${career.id}`}
                  key={`${career.name}-${career.description}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full ${
                      theme === "dark"
                        ? "bg-[#2C2C2C] hover:bg-[#363636]"
                        : "bg-gray-100 hover:bg-gray-200"
                    } rounded-xl p-3 flex items-center justify-between group transition-all duration-300 shadow-md mb-3`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className={`w-8 h-8 ${
                          career.color
                        } rounded-full flex items-center justify-center overflow-hidden p-1.5 shadow-lg ${
                          theme === "dark"
                            ? "border-[#1C1C1C]"
                            : "border-gray-200"
                        } ring-2 ring-black/5`}
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={career.logo}
                            alt={`${career.name} logo`}
                            width={18}
                            height={18}
                            className="object-contain drop-shadow-md"
                          />
                        </div>
                      </motion.div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-medium text-xs">{career.name}</h3>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                              theme === "dark"
                                ? "bg-[#1C1C1C] text-gray-400"
                                : "bg-white text-gray-500"
                            } shadow-sm`}
                          >
                            {career.period}
                          </span>
                        </div>
                        <p
                          className={`text-[10px] ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {career.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {career.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={`${career.id}-${tech}`}
                              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                theme === "dark"
                                  ? "bg-[#1C1C1C] text-gray-400"
                                  : "bg-white text-gray-500"
                              } shadow-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                          {career.technologies.length > 3 && (
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                theme === "dark"
                                  ? "bg-[#1C1C1C] text-gray-400"
                                  : "bg-white text-gray-500"
                              } shadow-sm`}
                            >
                              +{career.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="flex items-center justify-center"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className={`w-4 h-4 ${
                          theme === "dark"
                            ? "text-gray-500 group-hover:text-white"
                            : "text-gray-400 group-hover:text-black"
                        } transition-colors`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
