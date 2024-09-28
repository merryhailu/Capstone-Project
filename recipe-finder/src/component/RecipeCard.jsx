const RecipeCard = ({ recipe }) => {
    const {
        strMeal,
        strCategory,
        strMealThumb,
        strArea,
        handleChange,
    } = recipe;
    
    return (
        <div className="card hover:shadow-lg rounded-md bg-slate-200 m-3" onClick={handleChange}>
           <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image cursor-pointer w-full size-60 sm:h-48 object-cover rounded" 
                
            /> 
            <div className="card-info cursor-pointer text-center pb-5">
                <h3 className="mt-4 font-bold uppercase"> {strMeal}</h3>
                <span className="category block tetx-sm text-gray-700">Category : {strCategory}</span>
                <h2 className="block tetx-sm text-gray-700" >Cuisine : {strArea}</h2>
            </div>

        </div>
    )
};

export default RecipeCard;