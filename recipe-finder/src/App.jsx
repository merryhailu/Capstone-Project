import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchBar from './component/SearchBar';
import RecipeList from './component/RecipeList';
import RecipeDetail from './component/RecipeDetail';
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
      <div className="container mx-auto py-8 ">
      <div className="text-red-600 text-center font-bold text-2xl p-5 my-4">
      <h1 className='font-Tangerine text-2xl font-bold'>What do you want to cook today?</h1>
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
          <Route path="/recipes/:recipeId" element={<RecipeDetail recipeId={selectedRecipe} />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;

