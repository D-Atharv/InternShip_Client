"use client";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed top-4 left-4 z-50 lg:hidden text-white p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition focus:outline-none"
        >
          <span className="text-lg">☰</span>
        </button>
      )}

      <aside
        className={`lg:w-64 bg-gray-800 h-full p-6 lg:static fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden self-end text-gray-300 bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition"
          >
            ✖️
          </button>

          <ul className="mt-4 space-y-8">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-yellow-500 transition-all duration-200"
              >
                <span>🏠</span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/employee/list"
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-yellow-500 transition-all duration-200"
              >
                <span>📋</span>
                <span>Employee List</span>
              </Link>
            </li>
            <li>
              <Link
                href="/employee/create"
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-yellow-500 transition-all duration-200"
              >
                <span>➕</span>
                <span>Create Employee</span>
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-red-500 transition-all duration-200"
              >
                <span>🚪</span>
                <span>Logout</span>
              </Link>
            </li>
          </ul>

          <div className="mt-auto pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Admin Panel. All rights reserved.
            </p>
          </div>
        </div>
      </aside>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
}


