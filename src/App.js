import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from './components/LandingPage';
import SubmitRecipe from "./components/SubmitRecipe";



export const RecipeContext = React.createContext();

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [logged, setLogged] = useState(false);


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("login"));

    if (user) {
      setUser(user);
    }
    if (token) {
      setToken(token);
      setLogged(true)
    }
  }, []);

  return (
    <div className="App">
      <RecipeContext.Provider
        value={{
          token,
          setToken,
          user,
          setUser,
          logged,
          setLogged
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submitRecipe" element={<SubmitRecipe />} />
        </Routes>
      </RecipeContext.Provider>
</div>
  )
      }

export default App;
