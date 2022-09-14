import React, {useEffect, useState} from "react";
import "./MyCookBook.css";
import RecipeList from "../RecipeList/RecipeList";
import axios from 'axios';


function MyCookBook() {
    const [recipeList, setRecipeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

async function getUserRecipeList(){
    const {data} = await axios.get("http://localhost:5000/recipe/user/id", {withCredentials:true});
  
    setRecipeList(data.savedRecipes);
  
    setIsLoading(false);
}

    useEffect(() => {
        getUserRecipeList()
    },[])
    return (
        <div className="container mt-5">
            <div className="mt-3 d-flex justify-content-center">
                <span className="heading">My Cook Book</span>
            </div>
            <div className="d-flex justify-content-center">
                <span className="text">Here you can find all of your saved and added recipes</span>
            </div>
            {isLoading? (null): (
                <RecipeList allRecipes={recipeList} />
            )}
            
        </div>
    );
}

export default MyCookBook;
