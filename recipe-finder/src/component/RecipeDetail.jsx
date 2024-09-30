import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../api/theMealDBApi';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 


  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        const data = await fetchRecipeDetails(recipeId);
        setRecipe(data.meals[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching recipe details: {error}</p>;
  }

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
        <ol className="list-decimal pl-4 text-gray-700">
          {recipe.strInstructions.split('\n').map((instruction, index) => (
            <li key={index}>{instruction.trim()}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;