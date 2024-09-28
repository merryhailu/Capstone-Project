import  { useState } from 'react';
import SearchBar from './component/SearchBar';
import RecipeList from './component/RecipeList';
import RecipeDetail from './component/RecipeDetail';
import ErrorMessage from './component/ErrorMessage';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (recipes) => {
    setRecipes(recipes);
    setError('');
  };

  const handleError = (message) => {
    setError(message);
    setRecipes([]);
  };

//   const addToFavorites = (recipe) => {
//     let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     favorites.push(recipe);
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   };
  
//   const getFavorites = () => {
//     return JSON.parse(localStorage.getItem('favorites')) || [];
//   };

//   const addToShoppingList = (ingredient) => {
//     let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
//     shoppingList.push(ingredient);
//     localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
//   };
  
//   const getShoppingList = () => {
//     return JSON.parse(localStorage.getItem('shoppingList')) || [];
//   };
  
//   const categories = ['Desserts', 'Appetizers', 'Main Course'];

// const fetchByCategory = (category) => {
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//     .then(response => response.json())
//     .then(data => setRecipes(data.meals));
// };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} onError={handleError} />
      {error && <ErrorMessage message={error} />}
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </div>
  );
};

export default App;