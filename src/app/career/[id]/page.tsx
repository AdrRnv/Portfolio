"use client";

import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";

const careersData = [
  {
    id: "apprentice",
    name: "EffetB",
    description: "Apprentice Full-Stack Developer",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    period: "2023 - Present",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    responsibilities: [
      "Développement d'applications web full-stack",
      "Gestion de base de données MongoDB",
      "Création d'APIs RESTful avec Express",
      "Intégration de nouvelles fonctionnalités",
      "Optimisation des performances",
    ],
    achievements: [
      "Mise en place d'un système de gestion de contenu",
      "Amélioration des temps de chargement de 40%",
      "Implémentation d'un système de cache",
    ],
  },
  {
    id: "fullstack",
    name: "EffetB",
    description: "Full-Stack Developer",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    period: "2022 - 2023",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    responsibilities: [
      "Développement d'applications web",
      "Gestion de base de données",
      "Création d'APIs",
      "Maintenance et support",
    ],
    achievements: [
      "Refonte complète de l'interface utilisateur",
      "Migration vers une architecture microservices",
      "Mise en place de tests automatisés",
    ],
  },
  {
    id: "intern",
    name: "EffetB",
    description: "Intern Full-Stack Developer",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    period: "2022",
    technologies: ["React", "Node.js", "MongoDB"],
    responsibilities: [
      "Développement de fonctionnalités",
      "Correction de bugs",
      "Tests et documentation",
    ],
    achievements: [
      "Création d'un système de gestion des utilisateurs",
      "Optimisation des requêtes MongoDB",
      "Mise en place d'un système de logging",
    ],
  },
];

export default function CareerDetail() {
  const { theme, toggleTheme } = useTheme();
  const params = useParams();
  const career = careersData.find((c) => c.id === params.id);

  if (!career) {
    return (
      <main
        className={`min-h-screen p-4 ${
          theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="max-w-[550px] mx-auto">
          <Navbar />
          <div
            className={`${
              theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
            } rounded-xl p-6 shadow-xl`}
          >
            <h1 className="text-xl font-bold mb-4">Carrière non trouvée</h1>
            <Link href="/career">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  theme === "dark"
                    ? "bg-[#2C2C2C] hover:bg-[#363636]"
                    : "bg-gray-100 hover:bg-gray-200"
                } px-4 py-2 rounded-xl font-medium transition-colors text-sm shadow-md`}
              >
                Retour à la liste
              </motion.button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
              <span className="text-base font-medium">{career.name}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              {career.description}
            </motion.p>
          </div>

          <div className="space-y-4">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className={`${
                theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
              } rounded-xl p-3`}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className={`w-8 h-8 ${
                    career.color
                  } rounded-full flex items-center justify-center overflow-hidden p-1.5 shadow-lg ${
                    theme === "dark" ? "border-[#1C1C1C]" : "border-gray-200"
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
                <div>
                  <h3 className="font-medium text-xs">{career.name}</h3>
                  <p
                    className={`text-[10px] ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {career.period}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className={`${
                theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
              } rounded-xl p-3`}
            >
              <h3 className="font-medium text-xs mb-2">Responsabilités</h3>
              <ul className="space-y-1">
                {career.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className={`text-[10px] ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    } flex items-start gap-1.5`}
                  >
                    <span className="w-1 h-1 mt-1.5 bg-gray-500 rounded-full"></span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className={`${
                theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
              } rounded-xl p-3`}
            >
              <h3 className="font-medium text-xs mb-2">Réalisations</h3>
              <ul className="space-y-1">
                {career.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className={`text-[10px] ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    } flex items-start gap-1.5`}
                  >
                    <span className="w-1 h-1 mt-1.5 bg-gray-500 rounded-full"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className={`${
                theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
              } rounded-xl p-3`}
            >
              <h3 className="font-medium text-xs mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-1">
                {career.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      theme === "dark"
                        ? "bg-[#1C1C1C] text-gray-400"
                        : "bg-white text-gray-500"
                    } shadow-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
