export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-lg p-4 shadow-lg rounded-lg flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 font-extrabold text-lg truncate">
          Logo | Admin Panel
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <span className="hidden sm:block text-gray-200 text-sm font-medium truncate">
          Welcome,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 font-bold">
            Hukum Gupta
          </span>
        </span>
      </div>
    </header>
  );
}
