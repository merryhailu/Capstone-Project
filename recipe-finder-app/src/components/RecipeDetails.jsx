

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div>
      <h2>Recipe Detail</h2>
      <h2>Title: {recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter(key => key.startsWith('strIngredient') && recipe[key])
          .map(key => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div>
          <h3>Video</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        // <a href={"https://www.themealdb.com/meal/" + recipe.idMeal} target="_blank">Source Link</a>
      )}
    </div>
  );
};

export default RecipeDetail;