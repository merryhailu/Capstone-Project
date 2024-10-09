import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-10 my-9">
      {recipes ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))
      ) : (
        <div className="text-center font-semibold text-4xl p-6 font-Tangerine">
          <p>
            It seems we could not find any recipes similar to what you were
            looking for.
            <p>Lets try a different search our featured recipes.</p>
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
