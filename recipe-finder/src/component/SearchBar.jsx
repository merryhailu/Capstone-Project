import  { useState } from 'react';


const SearchBar = ({onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(''); 
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex justify-evenly mb-4 ">
      
      <input
        type="text"
        placeholder="Search for Recipes ..."
        className=" px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:caret-indigo-500 w-1/2 bg-gradient-to-r from-violet-300 to-fuchsia-200  "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;