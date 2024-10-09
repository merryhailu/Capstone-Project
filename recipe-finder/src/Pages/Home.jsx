import { Link } from "react-router-dom";
import Header from "../component/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-background-image w-full h-screen bg-cover bg-no-repeat flex items-center justify-center">
        <div className="w-[25%] h-[30%]">
          <h1 className=" text-white text-4xl font-semibold font-Tangerine md:text-6xl text-center pb-6">
            What do you want to cook today?
          </h1>
          <Link to="/recipes">
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-400 hover:to-purple-400 text-white px-4 py-2 md:px-9 md:py-3 w-full rounded-full
           transition ease-in-out delay-100 duration-700 hover:scale-110  font-serif md:text-2xl text-center "
            >
              Find Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
