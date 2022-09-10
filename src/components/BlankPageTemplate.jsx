import React from "react";
import { Container, Row, Col, Alert, Navbar } from "react-bootstrap/";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function SubmitRecipe() {
    return (
        <div class="container mt-3">
            <div class="mt-3 d-flex justify-content-center">
                <span class="heading">Recipe!</span>
            </div>
            <div class="d-flex justify-content-center">
                <span class="text">Hey, nice to see you</span>
            </div>
            <div class="mt-3 d-flex justify-content-center">
                <span class="text1">
                    We are looking for new recipes and wants to feature YOURS on
                    our website!
                    <br />
                    Got a recipe that's been passed down in the family? A new
                    recipe you came up with?{" "}
                </span>
            </div>
        </div>
    );
}

export default SubmitRecipe;
