import React from 'react' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard({recipe}){

  const navigate = useNavigate();
  function handleSeeMore(){
    navigate(`/recipe/${recipe._id}`);
  }

return (
    <Card>
    <Card.Img variant="top" src={recipe.picture} />
    <Card.Body>
      <Card.Title>{recipe.recipeTitle}</Card.Title>
      <Card.Text>
        Category: <strong> {recipe.category}</strong>
      </Card.Text>
      <Card.Text>
        Difficulty: <strong>{recipe.difficulty}</strong>
      </Card.Text>
      <Button onClick={handleSeeMore}>See More</Button>
      </Card.Body>
     </Card>
    )
}
