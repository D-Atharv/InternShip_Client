"use client";

import { useSidebar } from "../../Context/SideBarContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../components/ui/Loader";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (href: string) => {
    setIsLoading(true);
    toggleSidebar();
    setTimeout(() => {
      router.push(href);
      setIsLoading(false);
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    handleNavigation("/login"); 
  };

  return (
    <>
      {typeof window !== "undefined" && isLoading && <Loader />}
      <aside
        className={`lg:w-64 bg-white/10 backdrop-blur-md border border-white/20 h-full p-6 lg:static fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out rounded-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={toggleSidebar}
            className="lg:hidden self-end text-gray-300 bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20 transition"
          >
            ✖️
          </button>

          <ul className="mt-4 space-y-8">
            <li>
              <button
                onClick={() => handleNavigation("/dashboard")}
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-yellow-400 transition-all duration-200"
              >
                <span>🏠</span>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/employee/list")}
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-yellow-400 transition-all duration-200"
              >
                <span>📋</span>
                <span>Employee List</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/employee/create")}
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-yellow-400 transition-all duration-200"
              >
                <span>➕</span>
                <span>Create Employee</span>
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout} 
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-red-400 transition-all duration-200"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </li>
          </ul>

          <div className="mt-auto pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Admin Panel. All rights reserved.
            </p>
          </div>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-90 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
}
