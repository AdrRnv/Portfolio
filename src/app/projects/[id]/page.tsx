"use client";

import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Données de démonstration des projets
const projectsData = {
  fitool: {
    id: "fitool",
    name: "FiTool",
    description: "Nutritional and training tracking website",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    category: "Web Application",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Chart.js",
      "JWT",
    ],
    year: "2023",
    url: "https://fitool.example.com",
    github: "https://github.com/username/fitool",
    longDescription:
      "FiTool est une application web complète permettant aux utilisateurs de suivre leur alimentation et leurs séances d'entraînement. Elle offre des analyses détaillées, des graphiques de progression, et des recommandations personnalisées basées sur les objectifs de l'utilisateur.",
    features: [
      "Suivi des calories et macronutriments",
      "Planification des séances d'entraînement",
      "Visualisation des progrès par graphiques",
      "Base de données d'aliments et d'exercices",
      "Système de badges et récompenses",
      "Synchronisation avec des appareils connectés",
    ],
    images: [
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
    ],
    challenges:
      "L'un des plus grands défis a été de créer une interface utilisateur intuitive pour la saisie des aliments et des exercices, tout en maintenant une base de données complète et précise.",
  },
  fitpulse: {
    id: "fitpulse",
    name: "FitPulse",
    description: "Nutritional and training tracking mobile app",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    category: "Mobile App",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux",
      "Firebase",
    ],
    year: "2023",
    url: "https://fitpulse.example.com",
    github: "https://github.com/username/fitpulse",
    longDescription:
      "FitPulse est une application mobile de suivi nutritionnel et d'entraînement conçue pour offrir une expérience utilisateur fluide et intuitive sur les appareils mobiles. Elle synchronise les données avec FiTool et ajoute des fonctionnalités spécifiques aux appareils mobiles.",
    features: [
      "Suivi en temps réel des activités physiques",
      "Scan de codes-barres pour les aliments",
      "Notifications et rappels personnalisés",
      "Mode hors ligne avec synchronisation",
      "Intégration avec Google Fit et Apple Health",
      "Partage de progression sur les réseaux sociaux",
    ],
    images: [
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
    ],
    challenges:
      "L'adaptation de l'interface utilisateur pour les petits écrans tout en conservant une bonne expérience utilisateur a été un défi majeur. La synchronisation des données hors ligne et la gestion de la batterie ont également nécessité une attention particulière.",
  },
  portfolio: {
    id: "portfolio",
    name: "Portfolio",
    description: "Personal portfolio website",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: "2023",
    url: "https://portfolio.example.com",
    github: "https://github.com/username/portfolio",
    longDescription:
      "Mon portfolio personnel présente mes projets, compétences et expériences professionnelles. Il est conçu avec un design minimaliste et moderne, en mettant l'accent sur l'expérience utilisateur et les animations fluides.",
    features: [
      "Mode sombre/clair",
      "Animations et transitions fluides",
      "Responsive design",
      "Visualisation détaillée des projets",
      "Formulaire de contact",
      "Optimisé pour les performances",
    ],
    images: [
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
    ],
    challenges:
      "Trouver le bon équilibre entre esthétique et performance a été un défi. J'ai dû optimiser les animations et les ressources pour garantir des temps de chargement rapides tout en conservant une expérience visuelle attrayante.",
  },
  ecommerce: {
    id: "ecommerce",
    name: "E-Commerce Platform",
    description: "Online store for a clothing brand",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    category: "Web Application",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Redux",
      "AWS S3",
    ],
    year: "2022",
    url: "https://ecommerce.example.com",
    github: "https://github.com/username/ecommerce",
    longDescription:
      "Une plateforme e-commerce complète développée pour une marque de vêtements, avec gestion de catalogue, panier d'achat, paiements sécurisés, et un tableau de bord d'administration pour la gestion des produits et des commandes.",
    features: [
      "Catalogue de produits filtrable",
      "Système de panier et de checkout",
      "Intégration des paiements Stripe",
      "Gestion des comptes utilisateurs",
      "Tableau de bord d'administration",
      "Système de notifications par email",
    ],
    images: [
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
    ],
    challenges:
      "La gestion des sessions utilisateur, du panier d'achat et l'optimisation des performances du catalogue avec un grand nombre de produits ont représenté les défis techniques majeurs de ce projet.",
  },
  dashboard: {
    id: "dashboard",
    name: "Analytics Dashboard",
    description: "Data visualization dashboard for business metrics",
    logo: "/assets/images/LogoFT.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["React", "Chart.js", "Firebase", "Material UI", "D3.js"],
    year: "2022",
    url: "https://dashboard.example.com",
    github: "https://github.com/username/dashboard",
    longDescription:
      "Un tableau de bord d'analyse pour visualiser et interpréter des données commerciales complexes. Le dashboard présente des données en temps réel avec des graphiques interactifs et des indicateurs clés de performance personnalisables.",
    features: [
      "Visualisations de données en temps réel",
      "Graphiques et diagrammes interactifs",
      "Filtres et segmentation des données",
      "Export de rapports PDF/CSV",
      "Alertes et notifications",
      "Tableaux de bord personnalisables",
    ],
    images: [
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
    ],
    challenges:
      "La visualisation des grands ensembles de données de manière performante et la création d'une interface intuitive pour configurer des tableaux de bord personnalisés ont été les principaux défis techniques.",
  },
};

export default function ProjectDetail() {
  const { theme, toggleTheme } = useTheme();
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData[projectId as keyof typeof projectsData];

  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <main
        className={`min-h-screen p-6 flex items-center justify-center ${
          theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold mb-3">Projet non trouvé</h1>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                theme === "dark"
                  ? "bg-[#2C2C2C] hover:bg-[#363636]"
                  : "bg-gray-200 hover:bg-gray-300"
              } px-4 py-2 rounded-xl transition-colors shadow-md`}
            >
              Retour aux projets
            </motion.button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen p-6 ${
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
          } rounded-xl p-4 mb-5 shadow-xl`}
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
              <Link href="/projects">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </motion.button>
              </Link>
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
              <Link href="/projects">
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

        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-6 shadow-xl mb-5`}
        >
          <div className="flex items-start gap-5">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-16 h-16 ${
                project.color
              } rounded-full flex items-center justify-center overflow-hidden p-2.5 shadow-lg ${
                theme === "dark" ? "border-[#1C1C1C]" : "border-gray-200"
              } ring-2 ring-black/5 flex-shrink-0`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={36}
                  height={36}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 mb-2"
              >
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full ${
                    theme === "dark"
                      ? "bg-[#2C2C2C] text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  } shadow-sm`}
                >
                  {project.year}
                </span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } mb-3 leading-relaxed`}
              >
                {project.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    key={tech}
                    className={`text-xs px-2.5 py-0.5 rounded-full ${
                      theme === "dark"
                        ? "bg-[#2C2C2C] text-gray-300"
                        : "bg-gray-100 text-gray-600"
                    } shadow-sm`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-6 shadow-xl mb-5 overflow-hidden`}
        >
          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[currentImage]}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0 ? project.images.length - 1 : prev - 1
                  )
                }
                className="bg-black/30 text-white p-2 rounded-full m-2 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === project.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="bg-black/30 text-white p-2 rounded-full m-2 transition-colors"
              >
                <svg
                  className="w-5 h-5"
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
            </div>
          </div>
          <div className="flex justify-center gap-2 mb-4">
            {project.images.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "bg-emerald-500 scale-110"
                    : theme === "dark"
                    ? "bg-[#2C2C2C]"
                    : "bg-gray-200"
                }`}
              ></motion.button>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  theme === "dark"
                    ? "bg-[#2C2C2C] hover:bg-[#363636]"
                    : "bg-gray-100 hover:bg-gray-200"
                } px-4 py-2 rounded-xl font-medium transition-colors shadow-md text-sm flex items-center gap-2`}
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Voir le site
              </motion.button>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  theme === "dark"
                    ? "bg-[#2C2C2C] hover:bg-[#363636]"
                    : "bg-gray-100 hover:bg-gray-200"
                } px-4 py-2 rounded-xl font-medium transition-colors shadow-md text-sm flex items-center gap-2`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    fill="currentColor"
                  />
                </svg>
                GitHub
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-6 shadow-xl mb-5`}
        >
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="text-xl font-medium">À propos du projet</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              {project.longDescription}
            </motion.p>
          </div>

          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="text-xl font-medium">Fonctionnalités</span>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } list-disc pl-5 space-y-2`}
            >
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="text-xl font-medium">Défis techniques</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              {project.challenges}
            </motion.p>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex justify-between mb-4"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05, x: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                theme === "dark"
                  ? "bg-[#1C1C1C] hover:bg-[#2C2C2C]"
                  : "bg-white hover:bg-gray-50"
              } px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg flex items-center gap-2`}
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
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Tous les projets
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                theme === "dark"
                  ? "bg-[#1C1C1C] hover:bg-[#2C2C2C]"
                  : "bg-white hover:bg-gray-50"
              } px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg flex items-center gap-2`}
            >
              Accueil
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
