import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  { useNavigate } from "react-router-dom";


const RecipeDetail = () => {
  const { recipeId,setRecipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null); 
  const navigate = useNavigate();
  //const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  
  console.log(recipeId);

  useEffect(() => {
    const handleViewDetail = (recipeId) => {
      setRecipeId(recipeId);
      setRecipe(data);
        navigate(`/recipes/${recipeId}`);
        
    };

    return handleViewDetail; // Return the function to clean up
}, [recipeId]);



  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchRecipeDetails(recipeId);
  //       setRecipe(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching recipe details:', error);
  //       setError(error.message);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchRecipe();
  // }, [recipeId]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error fetching recipe details: {error}</p>;
  // }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mt-4">Ingredients</h2>
        <ul className="list-disc pl-4 text-gray-700">
          {recipe.strIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-4">Instructions</h2>
 
          {recipe.strInstructions}
  
      </div>
    </div>
  );
};

export default RecipeDetail;