import React, { useState, useEffect } from "react";
import "./App.css";
import {
    NavLink,
    BrowserRouter as Router,
    Switch,
    Link,
    Routes,
    Route,
} from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import SubmitRecipe from "./components/SubmitRecipe/SubmitRecipe";
import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import MyCookBook from "./components/MyCookBook/MyCookBook";

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
            setLogged(true);
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
                    setLogged,
                }}
            >
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/submitRecipe" element={<SubmitRecipe />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/myCookBook" element={<MyCookBook />} />
                </Routes>
            </RecipeContext.Provider>
        </div>
    );
}

export default App;
