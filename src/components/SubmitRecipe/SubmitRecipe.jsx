
import React from "react";
import { Container, Row, Col, Alert, Navbar  } from "react-bootstrap/";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./SubmitRecipe.css"

function SubmitRecipe() {
    return (

        <Container className="container" style={{
          }} >
            <h1>Submit your recipe!</h1>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>

            
            <p>
                We are looking for new recipes and wants to feature YOURS on our
                website! Got a recipe that's been passed down in the family? A
                new recipe you came up with?
            </p>
        </Container>
    );
}

export default SubmitRecipe;
