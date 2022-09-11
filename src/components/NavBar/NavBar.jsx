import React, { useContext } from "react";
import "./NavBar.css"
import Logo from "./Logo.png"
import { RecipeContext } from "../Context/Context";
import {
    NavLink,
    BrowserRouter as Router,
    Switch,
    Link,
    Routes,
    Route,
} from "react-router-dom";
import Modal from "../Modal/Modal"
function NavBar() {
    const {modalShow, setModalShow} = useContext(RecipeContext)
    return (
        
        <div class="">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid NavBarContainer">
                    <div className="AlignCenter">
                    <img
                        src={Logo}
                        height="80px"
                        width="80px"
                    />
                    <div className="title">Food <span className="titleBold">Hub</span></div>
                    </div>
                    <div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link
                                    to="/"
                                    class="nav-link active"
                                    title="LandingPage"
                                >
                                    <span class="home NavBarItem">Home</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/SubmitRecipe"
                                    class="nav-link NavBarItem"
                                    title="SubmitRecipe"
                                >
                                    Submit A Recipe
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/MyCookBook"
                                    class="nav-link NavBarItem"
                                    title="MyCookBook"
                                >
                                    My CookBook
                                </Link>
                            </li>
                        </ul>

                        
                            <div class="btn btn-dark SignInBtn" onClick={() => setModalShow(true)}> Sign in</div>
                            <Modal show={modalShow} onHide={()=> setModalShow(false)}/>
                    </div>
                    </div>
                </div>
            </nav>
            <div class="mt-3 d-flex justify-content-center"></div>
        </div>
    );
}

export default NavBar;
