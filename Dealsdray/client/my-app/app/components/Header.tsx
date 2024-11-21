import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-4 overflow-hidden">
        <h1 className="text-yellow-400 font-bold text-lg truncate">
          Logo | Admin Panel
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <span className="hidden sm:block text-gray-300 text-sm font-medium truncate">
          Welcome, <span className="text-yellow-400">Hukum Gupta</span>
        </span>
        <DarkModeToggle />
      </div>
    </header>
  );
}
