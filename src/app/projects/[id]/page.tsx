"use client";

import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

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
      "Symfony",
      "Docker",
      "Tailwind CSS",
      "Chart.js",
      "MySQL",
    ],
    year: "2024",
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
    logo: "/assets/images/LogoFP.png",
    color: "bg-white",
    category: "Mobile App",
    technologies: [
      "Symfony",
      "Vue.js",
      "MongoDB",
      "Docker",
      "Capacitor",
      "Render",
    ],
    year: "2025",
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
    logo: "/assets/images/Vercel.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
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
  sae: {
    id: "sae",
    name: "BTP SAE",
    description: "Website for construction management",
    logo: "/assets/images/btp.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Symfony", "Tailwind CSS"],
    year: "2024",
    url: "https://ecommerce.example.com",
    github: "https://github.com/username/ecommerce",
    longDescription:
        "Une application web de gestion dédiée au secteur du BTP, développée en équipe dans le cadre d’un projet SAE. Elle permet la gestion des chantiers, des employés, des clients, et des ressources, avec une interface intuitive et un tableau de bord pour le suivi global des activités.",
    features: [
      "Gestion des chantiers et des affectations",
      "Suivi des employés et de leur planning",
      "Base de données clients et contrats",
      "Interface d’administration centralisée",
      "Système d’authentification sécurisé",
      "Exportation de données en PDF ou Excel",
    ],
    images: [
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
      "/assets/images/LogoFT.png",
    ],
    challenges:
        "La conception d’un modèle de données adapté au secteur du BTP, la gestion des droits utilisateurs selon les rôles (admin, chef de chantier, employé), et la coordination en équipe pour une architecture robuste et maintenable ont été les principaux défis du projet.",
  },
  studea: {
    id: "studea",
    name: "Studea",
    description: "Booklets of apprenticeship",
    logo: "/assets/images/Studea.png",
    color: "bg-white",
    category: "Web Application",
    technologies: ["Symfony", "Vue.js", "Docker"],
    year: "2024",
    url: "https://dashboard.example.com",
    github: "https://github.com/username/dashboard",
    longDescription:
      "Plateforme web destinée à la gestion de la vie étudiante, développée pour une entreprise. Elle centralise les documents, les échanges, les modules pédagogiques et les informations administratives des étudiants. Développée en Symfony et Vue.js, elle est utilisée quotidiennement par des milliers d’étudiants et de membres du personnel.",
    features: [
      "Espace personnel pour chaque étudiant",
      "Gestion des documents administratifs",
      "Messagerie interne et notifications",
      "Accès aux modules pédagogiques",
      "Interface d’administration pour les établissements",
      "Connexion sécurisée avec système de rôles",
    ],
    images: [
      "/assets/images/studea_dashboard.png",
      "/assets/images/studea_profile.png",
      "/assets/images/studea_admin.png",
    ],
    challenges:
      "L’unification de plusieurs fonctionnalités complexes (documents, communication, pédagogie) dans une interface fluide, la refonte de composants obsolètes, et l’évolution continue du produit en équipe agile ont représenté les principaux défis techniques.",
    },
};

export default function ProjectDetail() {
  const { theme, toggleTheme } = useTheme();
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData[projectId as keyof typeof projectsData];

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
