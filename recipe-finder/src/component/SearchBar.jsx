import { useState } from 'react';

const SearchBar = ({ onSearch, onError }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.meals) {
          onSearch(data.meals);
        } else {
          onError('No recipes found');
        }
      })
      .catch(error => {
        onError(error.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;