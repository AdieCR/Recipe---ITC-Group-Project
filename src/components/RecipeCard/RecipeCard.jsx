import React from 'react' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function RecipeCard({recipe}){


return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={recipe.picture} />
    <Card.Body>
      <Card.Title>{recipe.recipeTitle}</Card.Title>
      <Card.Text>
        Category: <strong> {recipe.category}</strong>
      </Card.Text>
      <Card.Text>
        Difficulty: <strong>{recipe.difficulty}</strong>
      </Card.Text>
      <Button>See More</Button>
      </Card.Body>
     </Card>
    )
}


