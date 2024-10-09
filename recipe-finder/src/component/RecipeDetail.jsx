import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api/theMealDBApi";
import { Link } from "react-router-dom";

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
    <div className="container sm:mx-auto py-8 px-5 text-center">
      <div className="text-left">
        <Link to="/recipes">
          <button className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 duration-700 hover:scale-110 ">
            Back to Recipe List
          </button>
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-center my-6 font-Tangerine">
        {recipe.strMeal}
      </h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-80 object-cover rounded-lg mb-8 shadow-lg shadow-purple-200/40 md:h-100"
      />

      <div className="flex justify-between p-6 mb-7 rounded-md border border-pink-500 text-center">
        <div>
          <h2 className="font-bold md:ml-10">Total Time</h2>
          <p>30 min</p>
        </div>
        <div>
          <h2 className="font-bold">Prep Time</h2>
          <p>15 min</p>
        </div>
        <div>
          <h2 className="font-bold md:mr-10">Cook Time</h2>
          <p>15 min</p>
        </div>
      </div>

      <div className=" p-4 bg-gradient-to-r from-purple-200 to-pink-100 rounded-lg shadow-lg shadow-purple-500/40 overflow-hidden  mb-4  md:mx-2">
        <div className="mt-8 shadow-lg pb-6 mb-3 rounded-sm">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="pl-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="shadow-lg pb-6 rounded-sm px-4">
          <h2 className="text-2xl font-bold my-5">Instructions</h2>
          <p> {recipe.strInstructions} </p>
        </div>

        {recipe.strYoutube && (
          <div>
            <h3 className="text-2xl font-bold my-5">Video</h3>
            <iframe
              className="w-full"
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
