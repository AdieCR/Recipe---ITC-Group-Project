import React from 'react' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function RecipeCard({recipe}){


return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      </Card.Text>
      <Button>Go somewhere</Button>
      </Card.Body>
     </Card>
    )
}


