import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm === "") {
      setShowPrompt(true);
      return;
    }

    onSearch(searchTerm);
    setSearchTerm("");
    setShowPrompt(false);
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit} className="flex justify-evenly my-9 ">
        <input
          type="text"
          placeholder="Search for Recipes ..."
          className=" px-4 py-3 rounded-full border  w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-400 text-white font-semibold"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          type="submit"
          className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </form>
      {showPrompt && (
        <p className="text-red-500 font-semibold text-center ">
          Please enter the name of the dish you'd like to search for.
        </p>
      )}
    </>
  );
};

export default SearchBar;
