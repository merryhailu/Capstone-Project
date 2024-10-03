import time from "../assets/images/time.png"
import good from "../assets/images/good.png";
import RecipeDetail from "./RecipeDetail";
const RecipeCard = ({ recipe,handleViewDetail}) => {
     
  return(

    <div className="bg-gradient-to-r from-purple-200 to-pink-50 rounded-lg shadow-lg shadow-purple-500/40 overflow-hidden  mb-4 mx-6 md:mx-2">
    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      className="size-60 w-full h-40 sm:h-56 object-cover rounded-t-lg"
    />
    <div className="p-4 px-8 flex justify-between">
      <div>
      <h3 className="text-lg font-bold mb-2">{recipe.strMeal}</h3>
      <p className="text-gray-700 mb-2">
        {recipe.strCategory} - {recipe.strArea}
      </p>
      <button
        className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 duration-700 hover:scale-110 "
        onClick={handleViewDetail}  >
          
        View Details
      </button>
      
      </div>
     
      <div className="pt-14 md:pt-13">
        <div className="flex items-center gap-2">
      <img src={time} alt="time" className="size-5" />
        <p className="text-gray-700 mb-1">1 hr 5 min</p>
        </div>
        <div className="flex items-center gap-2">
        <img src={good} alt="time" className="size-5 " />
        <span>93%</span>
        </div>
      </div>
      </div>
    
  </div>
);

}
    
 

export default RecipeCard;