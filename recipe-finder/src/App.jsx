import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './component/SearchBar';
import RecipeList from './component/RecipeList';
import RecipeDetails from './component/RecipeDetail';
import { fetchRecipes } from './api/theMealDBApi';


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  
  const handleSearch = async (searchTerm) => {
    try {
      setIsLoading(true);
      const data = await fetchRecipes(searchTerm);
      setRecipes(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleShowDetails = (recipeId) => {
    setSelectedRecipe(recipeId);
    
  };

  return (
    <Router>
      <div className="container mx-auto py-8">
      <div className="bg-slate-400 text-center font-bold text-2xl p-5 my-4">
      <h1>Recipe Finder</h1>
      </div>
        <SearchBar onSearch={handleSearch} />

        <Routes>
          <Route
            path="/"
            element={
              <RecipeList
                recipes={recipes}
                isLoading={isLoading}
                error={error}
                onShowDetails={handleShowDetails}
              />
            }
          />
         
          <Route path="/recipes/:recipeId" element={<RecipeDetails recipeId={selectedRecipe} />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;

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





//   return (
//     <div className="container mx-auto p-4">
//       <SearchBar onSearch={handleSearch} onError={handleError} />
//       {error && <ErrorMessage message={error} />}
//       <RecipeList recipes={recipes} />
//       {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
//     </div>
//   );
// };

// export default App;