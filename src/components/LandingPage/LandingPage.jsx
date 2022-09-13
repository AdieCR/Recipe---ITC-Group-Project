import React, { useState } from "react";
import {useSearchParams} from "react-router-dom";
import "./LandingPage.css";
import Search from "./Search.png";
import axios from "axios";
import {Link} from "react-router-dom";

function LandingPage({setRecipeList}) {
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
    <Link to="/searchPage"></Link>
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
      {/* <div className="row mt-5 p-3 g-3 d-flex justify-content-center LandingPageCards">
        <div className="col-md-4">
          <div className="card2 p-2 py-3">
            <div className="text-center d-flex flex-column align-items-center">
              <div>
                <img
                  src="https://i.imgur.com/YzEqP6e.png"
                  height="50px"
                  width="50px"
                  alt="logo"
                />
              </div> */}
              {/* <span className="stellar">Stellar</span>
              <span className="hosting">Shared Hosting</span>
              <span className="price mt-2">
                $ 0.99<span className="small"> /mo</span>
              </span>
              <span className="year">On first year</span>
              <button className="btn btn-success mt-2">Get Started</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card2 p-2 py-3">
            <div className="text-center d-flex flex-column align-items-center">
              <div>
                <img
                  src="https://i.imgur.com/f4B2c2B.png"
                  height="50px"
                  width="50px"
                  alt="avata"
                />
              </div> */}
              {/* <span className="stellar">Stellar Pro</span>
              <span className="hosting">Shared Hosting</span>
              <span className="price mt-2">
                $ 0.99<span className="small"> /mo</span>
              </span>
              <span className="year">On first year</span>
              <button className="btn2 btn-success mt-2">Get Started</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card2 p-2 py-3">
            <div className="text-center d-flex flex-column align-items-center">
              <div>
                <img
                  src=" https://i.imgur.com/C4CUnKG.png"
                  height="50px"
                  width="50px"
                  alt="logo"
                />
              </div>
              <span className="stellar">Pro Business</span>
              <span className="hosting">Shared Hosting</span>
              <span className="price mt-2">
                $ 0.99<span className="small"> /mo</span>
              </span>
              <span className="year">On first year</span>
              <button className="btn3 btn-success mt-2">Get Started</button> */}
            {/* </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default LandingPage;
