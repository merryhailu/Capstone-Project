import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import RecipeList from "../component/RecipeList";
import { useEffect, useState } from "react";
import { fetchRecipes } from "../api/theMealDBApi";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async (searchTerm = "") => {
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
    <div className=" mx-auto">
      <div className=" text-center font-bold"></div>
      <Header />

      <SearchBar onSearch={handleSearch} isLoading={isLoading} error={error} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;
