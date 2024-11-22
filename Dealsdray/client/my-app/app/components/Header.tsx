"use client";

import { useSidebar } from "../../Context/SideBarContext";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-white/10 backdrop-blur-lg p-4 mt-2  shadow-lg rounded-lg flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition focus:outline-none"
        >
          ☰
        </button>

        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 font-extrabold text-2xl truncate">
          Logo
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <span className="hidden lg:block text-gray-200 text-base font-medium truncate">
          Welcome,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 font-bold">
            Hukum Gupta
          </span>
        </span>

        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-black font-bold text-lg shadow-md border border-white/20">
          HG
        </div>
      </div>
    </header>
  );
}
