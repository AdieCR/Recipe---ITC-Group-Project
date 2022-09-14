import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import SubmitRecipeImg from "./SubmitRecipeImg.jpg";
import "./SubmitRecipeImg.css";

function SubmitRecipe() {
    const [recipeTitle, setRecipeTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [servings, setServings] = useState(0);
    const [totalTime, setTotalTime] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [picture, setPicture] = useState("");
    const [error, setError] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    let schema = yup.object().shape({
        servings: yup.number().positive(),
        totalTime: yup.number().positive(),
    });

    async function toAddRecipe(e) {
        e.preventDefault();
        const tempError = [];
        if (!recipeTitle) {
            tempError.push("Recipe Title is required");
        }
        if (!description) {
            tempError.push("Description is required");
        }
        if (!category) {
            tempError.push("Category is required");
        }
        if (!ingredients) {
            tempError.push("Ingredients is required");
        }
        if (!directions) {
            tempError.push("Directions is required");
        }

        schema
            .isValid({
                servings: servings,
            })
            .then(function (valid) {
                if (!servings) {
                    return tempError.push("Servings is required");
                } else if (!valid) {
                    return tempError.push(
                        "Servings should be a positive number"
                    );
                }

                schema
                    .isValid({
                        totalTime: totalTime,
                    })
                    .then(function (valid) {
                        if (!totalTime) {
                            tempError.push("Total Time is required");
                        } else if (!valid) {
                            tempError.push(
                                "Total Time should be a positive number"
                            );
                        }
                    });
            });

        if (!difficulty) {
            tempError.push("Difficulty is required");
        }
        if (!picture) {
            tempError.push("Picture is required");
        }
        if (tempError.length === 0) {
            try {
                const newRecipe = {
                    recipeTitle,
                    description,
                    category,
                    ingredients,
                    directions,
                    servings,
                    totalTime,
                    difficulty,
                    picture,
                };
                console.log("newRecipe", newRecipe);
                const recipeData = new FormData();
                recipeData.append("recipeTitle", newRecipe.recipeTitle);
                recipeData.append("description", newRecipe.description);
                recipeData.append("category", newRecipe.category);
                recipeData.append("servings", newRecipe.servings.toString());
                recipeData.append("totalTime", newRecipe.totalTime.toString());
                recipeData.append("ingredients", newRecipe.ingredients);
                recipeData.append("directions", newRecipe.directions);
                recipeData.append("picture", newRecipe.picture);
                recipeData.append("difficulty", newRecipe.difficulty);

                console.log("1", ...recipeData); // shortest script solution
                console.log(["2", ...recipeData]); // Think 2D array makes it more readable

                const recipe = await axios.post(
                    "http://localhost:5000/recipe",
                    recipeData,
                    { withCredentials: true }
                );
                console.log(recipe.data);
            } catch (err) {
                tempError.push(err);
                console.log(err);
            }
        }
        setErrorMessage(tempError[0]);

        console.log(tempError);
    }

    return (
        <div className="SubmitRecipeImg">
            <div className="mt-5 pt-3 d-flex justify-content-center">
                <span className="heading text-light">
                    Do you have a good recipe?
                </span>
            </div>
            <div className="d-flex justify-content-center">
                <span className="text text-white mb-3">Share with us!</span>
            </div>
            <div className="card-body px-0">
                <div className="row justify-content-center mb-5">
                    <div className="row justify-content-center round">
                        <div className="col-lg-10 col-md-12 ">
                            <div className="card shadow-lg card-1">
                                <div className="card-body inner-card">
                                    <form onSubmit={toAddRecipe}>
                                        <label for="recipeTitle">
                                            Recipe Title
                                        </label>
                                        <input
                                            type="text"
                                            id="recipeTitle"
                                            className="form-control mb-3"
                                            placeholder="Type Recipe Title"
                                            onChange={(e) =>
                                                setRecipeTitle(e.target.value)
                                            }
                                        />
                                        <label for="description">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            id="description"
                                            className="form-control  mb-3"
                                            placeholder="Type description"
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                        />
                                        <label for="category">Category</label>
                                        <select
                                            id="category"
                                            className="form-control mb-3"
                                            onChange={(e) =>
                                                setCategory(e.target.value)
                                            }
                                        >
                                            <option>Choose Category</option>
                                            <option>African</option>
                                            <option>European</option>
                                            <option>Latin</option>
                                            <option>Middle East</option>
                                            <option>USA</option>
                                        </select>
                                        <label for="ingredients">
                                            Ingredients
                                        </label>
                                        <textarea
                                            type="text"
                                            id="ingredients"
                                            className="form-control"
                                            rows="3"
                                            placeholder="Type ingredients"
                                            onChange={(e) =>
                                                setIngredients(
                                                    e.target.value.split(
                                                        /\r?\n/
                                                    )
                                                )
                                            }
                                        />
                                        <div
                                            id="ingredientsHelpBlock"
                                            class="form-text mb-3"
                                        >
                                            Please put each ingredient and its
                                            measurement on its own line.
                                        </div>
                                        <label for="directions">
                                            Directions
                                        </label>
                                        <textarea
                                            type="text"
                                            id="directions"
                                            className="form-control"
                                            rows="3"
                                            placeholder="Type directions"
                                            onChange={(e) =>
                                                setDirections(
                                                    e.target.value.split(
                                                        /\r?\n/
                                                    )
                                                )
                                            }
                                        />
                                        <div
                                            id="directionsHelpBlock"
                                            class="form-text mb-3"
                                        >
                                            Please put each step on its own
                                            line.
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label for="servings">
                                                    Servings
                                                </label>
                                                <input
                                                    type="text"
                                                    id="servings"
                                                    className="form-control"
                                                    placeholder="Type servings"
                                                    onChange={(e) =>
                                                        setServings(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div
                                                    id="ServingsHelpBlock"
                                                    class="form-text"
                                                >
                                                    Servings should be a
                                                    positive number.
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="totalTime">
                                                    Total Time
                                                </label>
                                                <input
                                                    type="text"
                                                    id="totalTime"
                                                    className="form-control"
                                                    placeholder="Type Total Time"
                                                    onChange={(e) =>
                                                        setTotalTime(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div
                                                    id="totalTimeHelpBlock"
                                                    class="form-text"
                                                >
                                                    Total Time in minutes.
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="difficulty">
                                                    Difficulty
                                                </label>
                                                <select
                                                    id="difficulty"
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        setDifficulty(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option>
                                                        Choose Difficulty
                                                    </option>
                                                    <option>Beginner</option>
                                                    <option>
                                                        Intermediate
                                                    </option>
                                                    <option>Advanced</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="form-group files">
                                                <label className="my-auto">
                                                    Upload Your File
                                                </label>
                                                <input
                                                    id="picture"
                                                    type="file"
                                                    accept="image/*"
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        setPicture(
                                                            e.target.files
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-12 col-lg-10 col-12">
                                                <div className="mb-2 mt-4">
                                                    <div className="warning mb-2 text-danger">
                                                        {errorMessage.length >
                                                            0 &&
                                                            `* ${errorMessage}`}
                                                    </div>
                                                    <div className="text-right">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary btn-block"
                                                        >
                                                            <small className="font-weight-bold">
                                                                Add Recipe
                                                            </small>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmitRecipe;
