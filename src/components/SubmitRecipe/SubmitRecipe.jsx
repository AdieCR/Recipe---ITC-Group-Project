import React, { useState } from "react";
import axios from "axios";

function SubmitRecipe() {
    const [recipeTitle, setRecipeTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);
    const [servings, setServings] = useState("");
    const [totalTime, setTotalTime] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [picture, setPicture] = useState("");
    const [error, setError] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

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
        if (!servings) {
            tempError.push("Servings is required");
        }
        if (!totalTime) {
            tempError.push("Total Time is required");
        }
        if (!difficulty) {
            tempError.push("Difficulty is required");
        }
        if (!createdBy) {
            tempError.push("Created By is required");
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
                    createdBy,
                    picture,
                };
                const recipe = axios.post("localhost:5000/recipe", newRecipe);
                console.log(recipe.data);
            } catch (err) {
                tempError.push(err);
                console.log(err);
            }
        }
        setErrorMessage(tempError[0]);

        console.log(tempError);
    }

    console.log(ingredients);

    return (
        <div className="container mt-3">
            <div className="mt-3 d-flex justify-content-center">
                <span className="heading">Recipe!</span>
            </div>
            <div className="d-flex justify-content-center">
                <span className="text">Hey, nice to see you</span>
            </div>
            <div className="mt-3 d-flex justify-content-center">
                <span className="text1">
                    We are looking for new recipes and wants to feature YOURS on
                    our website!
                    <br />
                    Got a recipe that's been passed down in the family? A new
                    recipe you came up with?
                </span>
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
                                            className="form-control"
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
                                            className="form-control"
                                            placeholder="Type description"
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                        />
                                        <label for="category">Category</label>
                                        <select
                                            id="category"
                                            className="form-control"
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
                                                setIngredients(e.target.value.split(/\r?\n/))
                                            }
                                        />
                                        <div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
                                        <div className="col-lg-5 col-md-6 col-sm-12"></div>
                                        <div className="form-group">
                                            <label for="description">
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="inputEmail4">
                                                Project Type
                                            </label>
                                            <select className="form-control">
                                                <option>Web Design</option>
                                                <option>Blockchain</option>
                                                <option>ML</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="time">
                                                Maximum time for the project
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="time"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="skill">
                                                Required Skills
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="skill"
                                                placeholder=""
                                            />
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-md-12 col-lg-10 col-12">
                                                <div className="form-group files">
                                                    <label className="my-auto">
                                                        Upload Your File
                                                    </label>
                                                    <input
                                                        id="file"
                                                        type="file"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-12 col-lg-10 col-12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlTextarea2">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        className="form-control rounded-0"
                                                        id="exampleFormControlTextarea2"
                                                        rows="5"
                                                    ></textarea>
                                                </div>
                                                <div className="mb-2 mt-4">
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
                                        <div className="warning">
                                            {errorMessage.length > 0 &&
                                                errorMessage}
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
