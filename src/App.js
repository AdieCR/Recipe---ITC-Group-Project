import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {
  // NavLink,
  // BrowserRouter as Router,
  // Switch,
  // Link,
  Routes,
  Route,
} from "react-router-dom";
import { RecipeContext } from "./components/Context/Context";
import LandingPage from "./components/LandingPage/LandingPage";
import SubmitRecipe from "./components/SubmitRecipe/SubmitRecipe";
import NavBar from "./components/NavBar/NavBar";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import MyCookBook from "./components/MyCookBook/MyCookBook";
import SearchPage from "./components/SearchPage/SearchPage";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import RecipePage from "./components/RecipePage/RecipePage";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function fetchUser() {
    const { data } = await axios.get("http://localhost:5000/user/id", {
      withCredentials: true,
    });
    if (data) {
      setIsLoggedIn(true);
      setCurrentUser(data);
    }
  }

  useEffect(() => {
    fetchUser();
    console.log(isLoggedIn, "isLoggedIn")

  }, []);

  const contextValue = {
    modalShow,
    setModalShow,
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <div className="App">
      <RecipeContext.Provider value={contextValue}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submitRecipe" element={<SubmitRecipe />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/myCookBook" element={<MyCookBook />} />
          <Route path="/searchPage" element={<SearchPage />}/>
          <Route path="/recipeList" element={<RecipeList />}/>
          <Route path="/recipeCard" element={<RecipeCard />}/>
          <Route path="/recipePage" element={<RecipePage />}/>
        </Routes>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
