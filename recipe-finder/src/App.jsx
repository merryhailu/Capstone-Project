import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./component/SearchBar";
import RecipeList from "./component/RecipeList";
import RecipeDetail from "./component/RecipeDetail";
import { fetchRecipes } from "./api/theMealDBApi";
import ListItem from "./component/ListItem";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      setIsLoading(true);
      const data = await fetchRecipes(searchTerm);
      setRecipes(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Router>
      <div className=" mx-auto py-8 bg-gradient-to-r from-purple-300 to-pink-200">
        <div className=" text-center font-bold text-2xl p-5 my-4">
          <h1 className=" text-purple-800 text-4xl font-semibold md:text-6xl px-9">
            What do you want to cook today?
          </h1>
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
              />
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
