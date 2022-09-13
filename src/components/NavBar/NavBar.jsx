import React, { useContext } from "react";
import "./NavBar.css"
import Logo from "./Logo.png";
import { RecipeContext } from "../Context/Context";
import axios from 'axios'
import {
    // NavLink,
    // BrowserRouter as Router,
    // Switch,
    Link,
    useNavigate,
    // Routes,
    // Route,
} from "react-router-dom";
import Modal from "../Modal/Modal"
function NavBar() {
    const navigate = useNavigate()
    const {modalShow, setModalShow, setCurrentUser, setIsLoggedIn, isLoggedIn} = useContext(RecipeContext)

    async function signOut(){
        setCurrentUser({});
        setIsLoggedIn(false);
        const signedOut = await axios.get('http://localhost:5000/user/signout', {withCredentials:true});
        if (signedOut.data.ok){
            navigate("/")
        }
    }

    

    return (
        
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light navBarContainer">
                <div className="container-fluid NavBarContainer">
                    <div className="AlignCenter">
                    <img
                        className="navBarLogo"
                        src={Logo}
                        height="80px"
                        width="80px"
                        alt="logo"
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
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                    title="LandingPage"
                                >
                                    <span className="home NavBarItem">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/searchPage"
                                    className="nav-link NavBarItem"
                                    title="SearchPage"
                                >
                                    Search
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/SubmitRecipe"
                                    className="nav-link NavBarItem"
                                    title="SubmitRecipe"
                                >
                                    Submit A Recipe
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/MyCookBook"
                                    className="nav-link NavBarItem"
                                    title="MyCookBook"
                                >
                                    My CookBook
                                </Link>
                            </li>
                            
                        </ul>

                            {!isLoggedIn ? (<><div className="btn btn-dark SignInBtn" onClick={() => setModalShow(true)}> Sign in</div>
                            <Modal show={modalShow} onHide={()=> setModalShow(false)}/></>): (
                                <div className="btn btn-dark SignInBtn" onClick={signOut}> Sign Out</div>
                            ) }
                            
                    </div>
                    </div>
                </div>
            </nav>
            <div className="mt-3 d-flex justify-content-center"></div>
           
        </div>
    );
}

export default NavBar;

