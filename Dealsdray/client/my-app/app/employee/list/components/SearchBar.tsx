interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-500 focus:ring-2 focus:ring-teal-500 transition bg-gray-800 text-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  