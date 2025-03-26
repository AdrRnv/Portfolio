"use client";

import Image from "next/image";
import { useTheme } from "./context/ThemeContext";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [progress, setProgress] = useState(35);
  const [showCopied, setShowCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adrian.rabian@gmail.com");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + Math.random() * 0.2;
        return newProgress >= 100 ? 35 : newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`flex items-center justify-center min-h-screen p-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-[500px] w-full mx-auto space-y-3">
        {/* Nav Card with Theme Toggle */}
        <div
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-2.5 w-full shadow-md`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span
                className={`text-xs font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Portfolio
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                  onClick={copyEmail}
                  className={`border ${
                      theme === "dark"
                          ? "border-[#2C2C2C] hover:bg-[#2C2C2C]"
                          : "border-gray-200 hover:bg-gray-100"
                  } px-3 py-1.5 rounded-lg font-medium transition-colors relative flex items-center gap-1.5 text-xs`}
              >
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>{showCopied ? "Email copié !" : "Copier l'email"}</span>
              </button>
            <button
              onClick={toggleTheme}
              className={`p-2 ${
                theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
              } rounded-lg transition-colors`}
            >
              {theme === "dark" ? (
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            </div>

          </div>
        </div>

        {/* Main Content Card */}
        <div
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-4 shadow-md w-full`}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
              <Image
                src="/avatar.png"
                alt="Adrian Rv"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <h1 className="text-xl font-bold mb-2">
              Portfolio en construction
            </h1>

            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span
                className={`text-xs ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Full-Stack Developer
              </span>
            </div>

            <p
              className={`text-xs ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } mb-3`}
            >
              Je travaille actuellement sur mon portfolio qui sera bientôt
              disponible.
              <br />
              N&apos;hésitez pas à me contacter pour en savoir plus sur mes
              projets.
            </p>

            <div className="w-full bg-gray-700/20 rounded-full h-1.5 mb-3">
              <div
                className="bg-emerald-500 h-1.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span className="text-xs">Mes technologies</span>
            </div>

            <div
              className={`w-full ${
                theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
              } rounded-lg p-2 flex flex-wrap gap-1.5 justify-center`}
            >
              {[
                "Symfony",
                "Vue.js",
                "Next.js",
                "Tailwind",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-0.5 rounded-md text-xs ${
                    theme === "dark" ? "bg-[#363636]" : "bg-white"
                  } ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-2 shadow-md w-full text-center`}
        >
          <p
            className={`text-xs ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} Adrian Rabian • Portfolio en
            construction
          </p>
        </div>
      </div>
    </main>
  );
}
