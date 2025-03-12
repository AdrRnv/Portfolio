"use client";

import Image from "next/image";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      className={`min-h-screen p-5 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-[500px] mx-auto">
        {/* Navigation Card */}
        <div
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-3 mb-4 shadow-lg`}
        >
          <nav className="flex justify-between items-center">
            <div className="flex gap-3">
              <button
                className={`p-1.5 ${
                  theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                } text-emerald-500 rounded-lg transition-colors`}
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </button>
              <button
                className={`p-1.5 hover:${
                  theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                } rounded-lg transition-colors`}
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              <button
                className={`p-1.5 hover:${
                  theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                } rounded-lg transition-colors`}
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
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-1.5 ${
                  theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                } rounded-lg transition-colors`}
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
              </button>
              <button
                className={`${
                  theme === "dark"
                    ? "bg-[#2C2C2C] hover:bg-[#363636]"
                    : "bg-gray-100 hover:bg-gray-200"
                } px-3 py-1.5 rounded-lg font-medium transition-colors text-xs`}
              >
                Hire Me
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content Card */}
        <div
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-5 shadow-lg`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <span
                  className={`text-base ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Full-Stack Developer
                </span>
                <span className="ml-3 text-xs text-emerald-500 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-3">I&apos;m Adrian Rv</h1>
              <p
                className={`text-md ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full-Stack Developer from France.
                <br />
                Currently working at None.
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-[#2C2C2C] hover:bg-[#363636]"
                      : "bg-gray-100 hover:bg-gray-200"
                  } px-4 py-2 rounded-lg font-medium transition-colors`}
                >
                  Hire Me
                </button>
                <button
                  className={`border ${
                    theme === "dark"
                      ? "border-[#2C2C2C] hover:bg-[#2C2C2C]"
                      : "border-gray-200 hover:bg-gray-100"
                  } px-4 py-2 rounded-lg font-medium transition-colors`}
                >
                  Copy Email
                </button>
              </div>
            </div>
            <div className="relative">
              <div
                className={`w-24 h-24 rounded-full overflow-hidden ${
                  theme === "dark" ? "bg-[#2C2C2C]" : "bg-gray-100"
                }`}
              >
                <Image
                  src="/avatar.png"
                  alt="Adrian Rv"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div
            className={`${
              theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
            } rounded-xl`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                <span className="text-base">Projects</span>
              </div>
              <button
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-black"
                } flex items-center gap-1.5 transition-colors text-sm`}
              >
                View All
                <svg
                  className="w-3 h-3"
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
              </button>
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "FiTool",
                  description: "Nutritional and training tracking website",
                  logo: "/assets/images/LogoFT.png",
                  color: "bg-white",
                },
                {
                  name: "FitPulse",
                  description: "Nutritional and training tracking mobile app",
                  logo: "/assets/images/LogoFT.png",
                  color: "bg-white",
                },
              ].map((project) => (
                <button
                  key={`${project.name}-${project.description}`}
                  className={`w-full ${
                    theme === "dark"
                      ? "bg-[#2C2C2C] hover:bg-[#363636]"
                      : "bg-gray-100 hover:bg-gray-200"
                  } rounded-lg p-3 flex items-center justify-between group transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 ${
                        project.color
                      } rounded-full flex items-center justify-center text-base overflow-hidden p-1.5 shadow-lg ${
                        theme === "dark"
                          ? "border-[#1C1C1C]"
                          : "border-gray-200"
                      } ring-1 ring-black/5`}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={20}
                          height={20}
                          className="object-contain drop-shadow-md"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-sm">{project.name}</h3>
                      <p
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
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
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Career Section */}
        <div
          className={`${
            theme === "dark" ? "bg-[#1C1C1C]" : "bg-white"
          } rounded-xl p-5 shadow-lg mt-4`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              <span className="text-base">Career</span>
            </div>
            <button
              className={`${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-black"
              } flex items-center gap-1.5 transition-colors text-sm`}
            >
              View All
              <svg
                className="w-3 h-3"
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
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "EffetB",
                description: "Apprentice Full-Stack Developer",
                logo: "/assets/images/LogoEffetB.png",
                color: "bg-white",
              },
              {
                name: "EffetB",
                description: "Full-Stack Developer",
                logo: "/assets/images/LogoEffetB.png",
                color: "bg-white",
              },
              {
                name: "EffetB",
                description: "Intern Full-Stack Developer",
                logo: "/assets/images/LogoEffetB.png",
                color: "bg-white",
              },
            ].map((project) => (
              <button
                key={`${project.name}-${project.description}`}
                className={`w-full ${
                  theme === "dark"
                    ? "bg-[#2C2C2C] hover:bg-[#363636]"
                    : "bg-gray-100 hover:bg-gray-200"
                } rounded-lg p-3 flex items-center justify-between group transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 ${
                      project.color
                    } rounded-full flex items-center justify-center text-base overflow-hidden p-1.5 shadow-lg ${
                      theme === "dark" ? "border-[#1C1C1C]" : "border-gray-200"
                    } ring-1 ring-black/5`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={20}
                        height={20}
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-sm">{project.name}</h3>
                    <p
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
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
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
