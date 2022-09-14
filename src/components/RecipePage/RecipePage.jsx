import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../Context/Context";
import * as Icon from "react-bootstrap-icons";

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
    console.log(recipe);

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
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col lg={9} className="d-flex flex-column justify-content-center">
          <h2>{recipe.recipeTitle}</h2>
          <div>{recipe.description}</div>
          <Row>
            <Col lg={9}>
              <Image
                src={recipe.picture}
                alt={recipe?.name}
                className="rounded"
                fluid
              />
            </Col>
            <Col lg={3}>
              <div>{recipe.category}</div>
              <div>{recipe.totalTime}</div>
              <div>{recipe.servings}</div>
            </Col>
          </Row>
          <div>{recipe.recipeTitle}</div>
          <div>{recipe.createdBy}</div>
          <div>{recipe.difficulty}</div>
          <h4>Ingredients</h4>
          <div>
            {recipe?.ingredients?.map((ingredient, index) => (
              <div key={index} className="d-flex align-items-center gap-3">
                <Icon.App />
                <div>{ingredient}</div>
              </div>
            ))}
          </div>
          <div>
            {recipe?.directions?.map((direction, index) => (
              <div key={index}>{direction}</div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipePage;
