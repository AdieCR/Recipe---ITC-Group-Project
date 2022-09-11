import React from "react";
import {
    NavLink,
    BrowserRouter as Router,
    Switch,
    Link,
    Routes,
    Route,
} from "react-router-dom";

function NavBar() {
    return (
        // <div class="container mt-3">
        // <div class="card card1 p-2">
        <div class="innercard p-2">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <img
                        src="https://i.imgur.com/hSDDP67.png"
                        height="50px"
                        width="50px"
                    />
                    <a class="navbar-brand name" href="#">
                        Cloud<span class="go">Go</span>
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link
                                    to="/"
                                    class="nav-link active"
                                    title="LandingPage"
                                >
                                    <span class="home">Home</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/SubmitRecipe"
                                    class="nav-link"
                                    title="SubmitRecipe"
                                >
                                    Submit A Recipe
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/MyCookBook"
                                    class="nav-link"
                                    title="MyCookBook"
                                >
                                    My CookBook
                                </Link>
                            </li>
                        </ul>

                        <Link to="/signIn" class="nav-link" title="SignIn">
                            <div class="btn btn-dark"> Sign in</div>
                        </Link>
                    </div>
                </div>
            </nav>
            <div class="mt-3 d-flex justify-content-center"></div>
        </div>
        // </div>
        // </div>
    );
}

export default NavBar;
