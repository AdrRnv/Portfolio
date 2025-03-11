import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-[750px] mx-auto">
        {/* Navigation Card */}
        <div className="bg-[#1C1C1C] rounded-2xl p-4 mb-6">
          <nav className="flex justify-between items-center">
            <div className="flex gap-6">
              <button
                className="p-2 bg-[#2C2C2C] text-emerald-500 rounded-lg transition-colors"
                aria-current="page"
              >
                <svg
                  className="w-6 h-6"
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
              <button className="p-2 hover:bg-[#2C2C2C] rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
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
              <button className="p-2 hover:bg-[#2C2C2C] rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
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
              <button className="p-2 hover:bg-[#2C2C2C] rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#2C2C2C] rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
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
              </button>
              <button className="bg-[#2C2C2C] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#363636] transition-colors">
                Hire Me
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#1C1C1C] rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <span className="text-lg text-gray-300">
                  Full-Stack Developer
                </span>
                <span className="ml-4 text-sm text-emerald-500 bg-emerald-500/20 px-3 py-1 rounded-full">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4">I&apos;m Adrian Rv</h1>
              <p className="text-xl text-gray-400">
                Full-Stack Developer from France.
                <br />
                Currently working at None.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-[#2C2C2C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#363636] transition-colors">
                  Hire Me
                </button>
                <button className="border border-[#2C2C2C] px-6 py-3 rounded-lg font-medium hover:bg-[#2C2C2C] transition-colors">
                  Copy Email
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-[#2C2C2C]">
                <Image
                  src="/avatar.png"
                  alt="Adrian Rv"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-[#1C1C1C] rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <span className="text-lg">Projects</span>
              </div>
              <button className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                View All
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "FiTool",
                  description: "Nutrition and Session website",
                  logo: "/assets/images/LogoFT.png",
                  color: "bg-white",
                },
                {
                  name: "FitPulse",
                  description: "Nutrition and Session Mobile App",
                  icon: "M",
                  color: "bg-white",
                },
              ].map((project) => (
                <button
                  key={project.name}
                  className="w-full bg-[#2C2C2C] hover:bg-[#363636] rounded-xl p-4 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${project.color} rounded-full flex items-center justify-center text-xl overflow-hidden p-2 shadow-lg border-5 border-[#1C1C1C] ring-2 ring-black/5`}
                    >
                      {project.logo ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            width={28}
                            height={28}
                            className="object-contain drop-shadow-md"
                          />
                        </div>
                      ) : (
                        project.icon
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors"
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
      </div>
    </main>
  );
}
