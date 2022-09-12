import React from "react";
import { Container, Row, Col, Alert, Navbar } from "react-bootstrap/";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function MyCookBook() {
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
                    recipe you came up with?{" "}
                </span>
            </div>
        </div>
    );
}

export default MyCookBook;
