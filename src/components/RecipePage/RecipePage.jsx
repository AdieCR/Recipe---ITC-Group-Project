import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../Context/Context";

const RecipePage = () => {
  const params = useParams();

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
            `http://localhost:5000/recipe/${params.id}/save`,
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
  console.log(recipe);
  return (
    <Container>
      <h4>Test to see if works. Please I (Daniel) don't want to design.</h4>
      <Image
        src={recipe.picture}
        alt={recipe?.name}
        className="rounded "
        fluid
      />
      <div>{recipe.recipeTitle}</div>
      <div>{recipe.createdBy}</div>
      <div>{recipe.description}</div>
      <div>{recipe.difficulty}</div>
      <div>{recipe.servings}</div>
      <div>{recipe.totalTime}</div>
      <div>{recipe.category}</div>
      <div>
        {recipe.ingredients.map((ingredient) => (
          <div>{ingredient}</div>
        ))}
      </div>
      <div>
        {recipe.directions.map((direction) => (
          <div>{direction}</div>
        ))}
      </div>
    </Container>
  );
};

export default RecipePage;
