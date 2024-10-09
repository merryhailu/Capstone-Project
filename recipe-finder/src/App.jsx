import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import RecipeDetail from "./component/RecipeDetail";
import Footer from "./component/Footer";

const App = () => {
  return (
    <Router>
      {/* used for routing between different pages */}
      <div className=" mx-auto ">
        <div className=" text-center font-bold font-serif"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
