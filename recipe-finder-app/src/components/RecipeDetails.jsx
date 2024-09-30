

const RecipeDetail = ({ recipe }) => {
  const {
      strMeal,
      strInstructions,
      strMealThumb,
      strYoutube,
  } = recipe; 

  return (
    <div>
      <h2>Recipe Detail</h2>
      <h2>Title: {strMeal}</h2>
      <img 
      src={strMealThumb} 
      alt={strMeal} />
      
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter(key => key.startsWith('strIngredient') && recipe[key])
          .map(key => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h3>Instructions</h3>
      <p>{strInstructions}</p>
      {strYoutube && (
        <div>
          <h3>Video</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${strYoutube.split('=')[1]}`}
            allowFullScreen
          ></iframe>
        </div>
        // <a href={"https://www.themealdb.com/meal/" + recipe.idMeal} target="_blank">Source Link</a>
      )}
    </div>
  );
};

export default RecipeDetail;