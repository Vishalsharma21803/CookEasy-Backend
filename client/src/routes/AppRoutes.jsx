import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import RecipeDetails from "../pages/RecipeDetails";
import ProtectedRoutes from "../ProtectedRoutes";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Favorites from '../pages/Favorites';
import AddRecipe from "../pages/AddRecipe";
import MyRecipes from '../pages/MyRecipes';
import EditRecipeForm from '../pages/EditRecipeForm';
import Profile from "../pages/Profile";
import LandingPage from "../pages/LandingPage";
import About from "../pages/AboutMe";
import Contact from "../pages/ContactMe";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      {/* Protected routes */}
      <Route
        path="/*"
        element={
          <>
            <Header />
            <ProtectedRoutes>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/recipedetails" element={<RecipeDetails />} />
                <Route path="/recipes/:id" element={<RecipeDetails />} /> 
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/add-recipe" element={<AddRecipe/>} />
                <Route path="/my-recipes" element={<MyRecipes />} />
                <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
            </ProtectedRoutes>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}