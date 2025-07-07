"use client";

import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const projects = [
  {
    id: "fitool",
    name: "FiTool",
    description: "Nutritional and training tracking website",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Symfony", "Docker", "MySQL"],
    year: "2024",
  },
  {
    id: "fitpulse",
    name: "FitPulse",
    description: "Nutritional and training tracking mobile app",
    logo: "/assets/images/LogoFP.png",
    color: "bg-white",
    category: "Mobile App",
    technologies: ["Symfony", "Vue.js", "Capacitor"],
    year: "2025",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Personal portfolio website",
    logo: "/assets/images/Vercel.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Next.js", "Tailwind CSS"],
    year: "2025",
  },
  {
    id: "sae",
    name: "BTP SAE",
    description: "Website for construction management",
    logo: "/assets/images/btp.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Symfony", "Tailwind CSS"],
    year: "2024",
  },
  {
    id: "studea",
    name: "Studea",
    description: "Booklets of apprenticeship",
    logo: "/assets/images/Studea.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Symfony", "Vue.js", "Docker"],
    year: "2024",
  },
];

export default function Projects() {
  const { theme } = useTheme();

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
        <Navbar />

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
              <span className="text-base font-medium">Tous mes projets</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              Découvrez les projets sur lesquels j&apos;ai travaillé
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-0"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
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
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className={`w-8 h-8 ${
                          project.color
                        } rounded-full flex items-center justify-center overflow-hidden p-1.5 shadow-lg ${
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
                      </motion.div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-medium text-xs">
                            {project.name}
                          </h3>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                              theme === "dark"
                                ? "bg-[#1C1C1C] text-gray-400"
                                : "bg-white text-gray-500"
                            } shadow-sm`}
                          >
                            {project.year}
                          </span>
                        </div>
                        <p
                          className={`text-[10px] ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={`${project.id}-${tech}`}
                              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                theme === "dark"
                                  ? "bg-[#1C1C1C] text-gray-400"
                                  : "bg-white text-gray-500"
                              } shadow-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                theme === "dark"
                                  ? "bg-[#1C1C1C] text-gray-400"
                                  : "bg-white text-gray-500"
                              } shadow-sm`}
                            >
                              +{project.technologies.length - 3}
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
