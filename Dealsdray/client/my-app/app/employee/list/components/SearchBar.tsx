interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  