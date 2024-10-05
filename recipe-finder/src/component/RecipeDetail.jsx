import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api/theMealDBApi";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        const data = await fetchRecipeDetails(recipeId);
        setRecipe(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
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

  const ingredients = [];
  if (recipe) {
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
  }

  return (
    <div className="container mx-4 sm:mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold text-center mb-4 font-Tangerine">
        {recipe.strMeal}
      </h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-80 object-cover rounded-lg mb-4 shadow-lg shadow-purple-200/40"
      />

      <div className="flex justify-between p-6 m-3 border border-pink-500">
        <div className="">
          <h2 className="font-bold">Total Time</h2>
          <p>30 min</p>
        </div>
        <div>
          <h2 className="font-bold">Prep Time</h2>
          <p>15 min</p>
        </div>
        <div>
          <h2 className="font-bold">Cook Time</h2>
          <p>15 min</p>
        </div>
      </div>

      <div className=" p-4 bg-gradient-to-r from-purple-200 to-pink-50 rounded-lg shadow-lg shadow-purple-500/40 overflow-hidden  mb-4  md:mx-2">
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className=" pl-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold my-5">Instructions</h2>
        <p className="md"> {recipe.strInstructions} </p>

        {recipe.strYoutube && (
          <div>
            <h3 className="text-2xl font-bold my-5">Video</h3>
            <iframe
              className="w-full md:w-"
              height="315"
              src={`https://www.youtube.com/embed/${
                recipe.strYoutube.split("=")[1]
              }`}
              allowFullScreen
            ></iframe>

            <div className=" mt-5">
              <a
                href={"https://www.themealdb.com/meal/" + recipe.idMeal}
                target="_blank"
              >
                for more detail please click the link -{" "}
                <span className="font-thin text-blue-500 underline">
                  Source Link
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
