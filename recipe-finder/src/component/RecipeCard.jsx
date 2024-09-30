

const RecipeCard = ({ recipe, onShowDetails }) => (
    
  <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 mb-4">
    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{recipe.strMeal}</h3>
      <p className="text-gray-700 mb-2">
        {recipe.strCategory} - {recipe.strArea}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={() => onShowDetails(recipe.idMeal)}
      >
        View Details
      </button>
    </div>
  </div>
);

export default RecipeCard;