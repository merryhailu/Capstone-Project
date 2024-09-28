import  { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import ErrorMessage from "./components/ErrorMessage";
// import RecipeDetail from "./components/RecipeDetails";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');
  // const [category, setCategory] = useState("Vegetarian");
 
  
  // search for the recipe
  const searchRecipes = async () => {
    try { 
      setIsLoading(true);
      const url = searchApi + query
      const res = await fetch(url);
  
      if(!res.ok){
        throw new Error ("Network was not ok")
      }
      const data = await res.json();
      setRecipes(data.meals);
      setError("");
      setIsLoading(false);
      
    }
   catch(error) {
    console.error("Error fetching recipes:", error);
   }

  };

  const handleError = (message) =>{
    setError(message);
    setRecipes([]);
  };
  


  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
<>

    <div className="container my-7 mx-auto">
      <h2 className="font-bold text-2xl text-center"> Search Your Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        onError={handleError}
      />
   
      <div className="recipes grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
        {recipes ? recipes.map(recipe => (
        
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          /> 
        )) : "Not Found!"}


{/* { selectedRecipe && <RecipeDetail recipe={selectedRecipe} />} */}

      </div>
    </div>
    </>
  );
}

export default App;