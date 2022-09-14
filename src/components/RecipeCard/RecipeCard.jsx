import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./RecipeCard.css";
export default function RecipeCard({ recipe }) {
    return (
        <>
            <Card style={{ width: "18rem" }} className="RecipeCardContainer">
                <Card.Img variant="top" src={recipe.picture} />
                <Card.Body>
                    <Card.Title>{recipe.recipTitle}</Card.Title>
                    <Card.Text>{recipe.difficulty}</Card.Text>
                    <Button>Show More</Button>
                </Card.Body>
            </Card>
        </>
    );
}
