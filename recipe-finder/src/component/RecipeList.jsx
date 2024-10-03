
import RecipeCard from './RecipeCard';

const RecipeList = ({recipes}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      { recipes ? recipes.map(recipe => (
        <RecipeCard 
        key={recipe.idMeal} 
        recipe={recipe} 
       />
      )) : "Not Found"}
    </div>
  );
};

export default RecipeList;

