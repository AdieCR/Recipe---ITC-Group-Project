import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { useParams, useNavigate} from "react-router-dom";
import { RecipeContext } from "../Context/Context";
import * as Icon from "react-bootstrap-icons";
import Print from "./Print.png";
import "./RecipePage.css"

const RecipePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, setIsLoggedIn, isLoggedIn } =
    useContext(RecipeContext);
  const [recipe, setRecipe] = useState({});
  const [fetchUserBool, setFetchUserBool] = useState(false);
  const [fetchRecipeBool, setFetchRecipeBool] = useState(false);


  const fetchRecipe = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/recipe/${params.id}`,
      {
        withCredentials: true,
      }
    );
    setRecipe(data);
   

    if (data) {
      const { data } = await axios.get("http://localhost:5000/recipe", {
        withCredentials: true,
      });
      //set global variable that has recipes
    }
  };

  const fetchUser = async () => {
    if (isLoggedIn) {
      const { data } = await axios.get("/user/id", {
        withCredentials: true,
      });
      if (data) setCurrentUser(data);
    }
  };

  
  useEffect(() => {
    fetchRecipe();
  }, [params, fetchRecipeBool]);

  useEffect(() => {
    fetchUser();
  }, [fetchUserBool]);

  const handleSaveRecipe = async () => {
    try {
      if (isLoggedIn) {
        if (currentUser.savedRecipes.includes(params.id)) {
          const res = await axios.delete(
            `http://localhost:5000/recipe/${params.id}/save`,
            {
              withCredentials: true,
            }
          );
          if (res.data) setFetchUserBool((prev) => !prev);
        } else {
          const res = await axios.post(
            `http://localhost:5000/recipe/${params.id}/save`,{},
            {
              withCredentials: true,
            }
          );
          if (res.data) {
            setFetchRecipeBool((prev) => !prev);
            setFetchUserBool((prev) => !prev);
          }
        }
      }
    } catch (error) {
      console.log(error);
      setFetchRecipeBool((prev) => !prev);
      setFetchUserBool((prev) => !prev);
    }
  };
  return (
    <div className="RecipePageContainer">
          <h2 className="RecipeTitle">{recipe.recipeTitle}</h2>
          <div className="Description">{recipe.description}</div>
      <div className="RecipePageTop">
          <img src={recipe.picture} alt="recipe" className="RecipeImage"/>
      
            <div className="info">
              <div className="infoDetail"><b>Category:</b> {recipe.category}</div>
              <div className="infoDetail"> <b>Total Time:</b> {recipe.totalTime} minutes</div>
              <div className="infoDetail"><b>Yield:</b>{ recipe.servings} servings</div>
              <div className="infoDetail"><b>Difficulty Level:</b> {recipe.difficulty}</div>
              <div className="infoDetail"> <b>Added by:</b> {recipe.createdBy}</div>
            </div>
            
          </div>
          <div className="d-flex" >

              <Button className="recipeBtn" onClick={handleSaveRecipe}>{currentUser.savedRecipes?.includes(params.id)? "Unsave": "Save"}</Button>
              <Button className="recipeBtn"onClick={() => navigate(-1)}>Back</Button>
          </div>
        <div className="RecipePageBottom">
        
        
        <div className="Bottom-Side1">
        <h4><b>Ingredients</b></h4>
            {recipe?.ingredients?.map((ingredient, index) => (
              <div key={index} className="d-flex align-items-center gap-3">
                <Icon.App />
                <div className="ingredient">{ingredient}</div>
              </div>
            ))}
          </div>
          <div className="Bottom-Side2">
          <h4><b>Directions</b></h4>
            {recipe?.directions?.map((direction, index) => (
              <div><b> Step {index+1}</b>
              <div  className="ingredient" key={index}>{direction}</div></div>
            ))}
          </div>
    </div>
    </div>
  )
};

export default RecipePage;

