import React, { useState } from "react";
import {useSearchParams, useNavigate} from "react-router-dom";
import "./LandingPage.css";
import Search from "./Search.png";
import axios from "axios";
// import {Link} from "react-router-dom";

function LandingPage({setRecipeList}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [textSearch, setTextSearch] = useState("");
  const [optionSearch, setOptionSearch] = useState("");
  const[difficulty, setDifficulty] = useState("");

  const navigate = useNavigate();

  async function handleSearch(){
        const search = {
        recipeTitle: textSearch,
        category: optionSearch,
        difficulty: difficulty,
    }
    const searchObj = {};
    if(textSearch) Object.assign(searchObj, {recipeTitle: textSearch});
    if(optionSearch) Object.assign(searchObj, {category: optionSearch});
    if(difficulty) Object.assign(searchObj, {difficulty: difficulty});
    setSearchParams(searchObj);

    try{
        const searchResult = await axios.get("http://localhost:5000/recipe", {params: searchObj});
        setRecipeList(searchResult.data);
        
    }catch(e){

    }
    navigate("/searchPage");
  }

  return (
    <div>
      <div className="LandingPageContainer">
        <div className="d-flex justify-content-left LandingPageContent">
          <div className="heading titleBold">It is even better than</div>
          <div className="heading titleBold">an expensive CookBook</div>
        </div>
        <div className="d-flex justify-content-left">
          <span className="text1 LandingPageSmallText">
            Learn how to make your favorite restaurant's dishes
          </span>
        </div>
        <div className="d-flex justify-content-left gap-3 LandingPageSearch">
        <input
            className="LandingPageInput"
            placeholder="I want to make..."
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
          ></input>
          <select
            className="d-flex flex-row align-items-center justify-content-center gap-1 buttonitems LandingPageCategory"
            onChange={(e) => {
              setOptionSearch(e.target.value);
            }}
          >
            <option></option>
            <option className="option">African</option>
            <option className="option">Asian</option>
            <option className="option">European</option>
            <option className="option">Latin</option>
            <option className="option">Middle East</option>
            <option className="option">USA</option>
          </select>
          <select
            className="d-flex flex-row align-items-center justify-content-center gap-1 buttonitems LandingPageCategory"
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          >
            <option></option>
            <option className="option">Beginner</option>
            <option className="option">Intermediate</option>
            <option className="option">Advanced</option>
          </select>


          <div className="LandingBtn" onClick={handleSearch}>
            <img src={Search} alt="search" className="LandingPageSearchBtn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
