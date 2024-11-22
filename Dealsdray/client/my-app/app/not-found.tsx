import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-yellow-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 p-8 bg-opacity-20 backdrop-blur-lg bg-white rounded-lg shadow-lg border border-gray-700 max-w-lg text-center">
        <h1 className="text-7xl font-bold text-yellow-500 mb-4 animate-bounce">
          404
        </h1>
        <p className="text-white text-lg mb-6">
          Oops! The page youre looking for doesnt exist.
        </p>
        <Link href="/dashboard">
          <h1 className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 hover:scale-105 transition-transform duration-200">
            Go Back Home
          </h1>
        </Link>
      </div>

      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-10 blur-3xl rounded-full animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-20 blur-3xl rounded-full animate-[spin_15s_linear_reverse_infinite]"></div>
    </div>
  );
}
