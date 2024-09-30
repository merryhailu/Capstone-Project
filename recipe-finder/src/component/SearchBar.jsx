import  { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(''); 
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="Search for Recipes ..."
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white 
 px-4 py-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;