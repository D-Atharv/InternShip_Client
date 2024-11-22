'use client';
import Link from "next/link";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError(""); 
    console.log("Form submitted:", { email, password });
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg max-w-sm mx-auto bg-white/10 backdrop-blur-md border border-white/20">
      <h2 className="text-yellow-400 text-3xl font-extrabold mb-6 text-center">
        Sign In
      </h2>
      <form onSubmit={handleSubmit}>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-300">Username</span>
          <input
            type="text"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-300">Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
        </label>
       
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          SignIn
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="text-sm text-gray-400 px-4">or</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-yellow-400 hover:text-yellow-300 font-medium transition"
          >
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}
