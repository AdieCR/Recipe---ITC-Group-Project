import React, {useState} from 'react';
import axios from 'axios';
import {Link, useSearchParams} from "react-router-dom";
import Search from "../LandingPage/Search.png";
import "./SearchPage.css"
import RecipeList from "../RecipeList/RecipeList";


function SearchPage({setRecipeList,recipeList}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [textSearch, setTextSearch] = useState("");
    const [optionSearch, setOptionSearch] = useState("");
    const[difficulty, setDifficulty] = useState("");
  
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
          setRecipeList(searchResult);
          
      }catch(e){
  
      }
    }
  return (
    <div className="SearchPageContainer">
        <div className="SearchPageTopContainer">
        <div>
        <h1>Browse through our many recipes!</h1>
        </div>
        <div>
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
    <div className="SearchPageBottomContainer">
        <RecipeList recipeList={recipeList} setRecipeList={setRecipeList}/>
    </div>
    </div>
  )
}

export default SearchPage