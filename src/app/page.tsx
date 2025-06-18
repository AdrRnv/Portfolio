"use client";

import Image from "next/image";
import { useTheme } from "./context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen p-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-[550px] mx-auto">
        <Navbar />

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-2xl p-6 shadow-xl`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Full-Stack Developer
                </span>
              </div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-3xl font-bold mb-2 tracking-tight"
              >
                I&apos;m Adrian Rv
              </motion.h1>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } leading-relaxed`}
              >
                Full-Stack Developer from France.
                <br />
                Currently working at <strong>EffetB</strong>.
              </p>
            </div>
            <div
              className={`w-24 h-24 rounded-full overflow-hidden ${
                theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
              } border-4 ${
                theme === "dark" ? "border-[#2C2C2C]" : "border-white"
              } shadow-lg`}
            >
              <Image
                src="/avatar.png"
                alt="Adrian Rv"
                width={130}
                height={130}
                className="object-cover"
              />
            </div>
          </div>

          {/* Projects Section */}
          <div
            className={`${
              theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
            } rounded-xl mb-4`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <span className="text-base font-medium">Projects</span>
              </div>
              <Link href="/projects">
                <motion.button
                  whileHover={{ x: 3 }}
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-black"
                  } flex items-center gap-1.5 transition-colors text-sm font-medium`}
                >
                  View All
                  <svg
                    className="w-3.5 h-3.5"
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
                </motion.button>
              </Link>
            </div>

            <div className="space-y-0">
              {[
                {
                  id: "fitool",
                  name: "FiTool",
                  description: "Nutritional and training tracking website",
                  logo: "/assets/images/LogoFT.png",
                  color: "bg-white",
                },
                {
                  id: "fitpulse",
                  name: "FitPulse",
                  description: "Nutritional and training tracking mobile app",
                  logo: "/assets/images/LogoFT.png",
                  color: "bg-white",
                },
              ].map((project, index) => (
                <Link
                  href={`/projects/${project.id}`}
                  key={`${project.name}-${project.description}`}
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
                      <div
                        className={`w-8 h-8 ${
                          project.color
                        } rounded-full flex items-center justify-center text-base overflow-hidden p-1.5 shadow-lg ${
                          theme === "dark"
                            ? "border-[#1C1C1C]"
                            : "border-gray-200"
                        } ring-2 ring-black/5`}
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            width={18}
                            height={18}
                            className="object-contain drop-shadow-md"
                          />
                        </div>
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-xs">{project.name}</h3>
                        <p
                          className={`text-[10px] ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
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
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-2xl p-4 shadow-xl mt-4`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span className="text-base font-medium">Career</span>
            </div>
            <Link href="/career">
              <motion.button
                whileHover={{ x: 3 }}
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-black"
                } flex items-center gap-1.5 transition-colors text-sm font-medium`}
              >
                View All
                <svg
                  className="w-3.5 h-3.5"
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
              </motion.button>
            </Link>
          </div>

          <div className="space-y-0">
            {[
              {
                id: "apprentice",
                name: "EffetB",
                description: "Apprentice Full-Stack Developer",
                logo: "/assets/images/LogoFT.png",
                color: "bg-white",
                period: "2023 - Present",
              },
              {
                id: "fullstack",
                name: "EffetB",
                description: "Full-Stack Developer",
                logo: "/assets/images/LogoFT.png",
                color: "bg-white",
                period: "2022 - 2023",
              },
              {
                id: "intern",
                name: "EffetB",
                description: "Intern Full-Stack Developer",
                logo: "/assets/images/LogoFT.png",
                color: "bg-white",
                period: "2022",
              },
            ].map((project, index) => (
              <Link
                href={`/career/${project.id}`}
                key={`${project.name}-${project.description}`}
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
                    <div
                      className={`w-8 h-8 ${
                        project.color
                      } rounded-full flex items-center justify-center text-base overflow-hidden p-1.5 shadow-lg ${
                        theme === "dark"
                          ? "border-[#1C1C1C]"
                          : "border-gray-200"
                      } ring-2 ring-black/5`}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={18}
                          height={18}
                          className="object-contain drop-shadow-md"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-xs">{project.name}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <p
                          className={`text-[10px] ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {project.description}
                        </p>
                        <span
                          className={`text-[10px] ${
                            theme === "dark" ? "text-gray-500" : "text-gray-400"
                          } sm:ml-2 mt-0.5 sm:mt-0`}
                        >
                          {project.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
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
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
