import axios from 'axios'; //to get the api from the Mealdb 

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export const fetchRecipes = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}search.php?s=${searchTerm}`);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching recipes: ', error);
    throw error; 
  }
};

export const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`${BASE_URL}lookup.php?i=${recipeId}`);
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching recipe details: ', error);
    throw error; 
  }
};
