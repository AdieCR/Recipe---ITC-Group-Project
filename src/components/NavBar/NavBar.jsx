import React, { useContext } from "react";
import "./NavBar.css"
// import Logo from "./Logo.URL"
import { RecipeContext } from "../Context/Context";
import {
    // NavLink,
    // BrowserRouter as Router,
    // Switch,
    Link,
    // Routes,
    // Route,
} from "react-router-dom";
import Modal from "../Modal/Modal"
function NavBar() {
    const {modalShow, setModalShow} = useContext(RecipeContext)
    return (
        
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid NavBarContainer">
                    <div className="AlignCenter">
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjZmZmIj4KICA8cGF0aCBkPSJtMzcyLjQgMzg4LjEyLTguMzM1OS04LjMzNTktMTYuNjY4IDE2LjY2OGMtNS42ODM2IDUuNjgzNi0xMi44ODMgOC4zMzU5LTIwLjI3IDguMzM1OS03LjM4NjcgMC0xNC41ODYtMi42NTIzLTIwLjI3LTguMzM1OS0xMS4xNzYtMTEuMTc2LTExLjE3Ni0yOS41NTEgMC00MC43MjcgNS40OTIyLTUuNDkyMiAxMi42OTEtOC4zMzU5IDIwLjI3LTguMzM1OSAzLjAzMTIgMCA1Ljg3MTEgMC4zNzg5MSA4LjcxNDggMS4zMjQyLTIuMDgyLTMuOTc2Ni0zLjc4OTEtOC41MjM0LTQuNTQ2OS0xMy4wNy0xLjMyNDItMC4xODc1LTIuNjUyMy0wLjM3ODkxLTMuOTc2Ni0wLjM3ODkxLTEwLjk4OCAwLTIxLjIxNSA0LjE2OC0yOC43OTMgMTEuOTM0LTcuNzY1NiA3Ljc2NTYtMTEuOTM0IDE3Ljk5Ni0xMS45MzQgMjguNzkzIDAgMTAuOTg4IDQuMTY4IDIxLjIxNSAxMS45MzQgMjguNzkzIDcuNTc4MSA3LjU3ODEgMTcuOTk2IDExLjkzNCAyOC43OTMgMTEuOTM0IDEwLjk4OCAwIDIxLjIxNS00LjE2OCAyOC43OTMtMTEuOTM0eiIvPgogIDxwYXRoIGQ9Im0zNTUuNzMgMzQ3LjRjLTUuNDkyMi01LjQ5MjItOC4zMzU5LTEyLjY5MS04LjMzNTktMjAuMjdzMy4wMzEyLTE0Ljk2NSA4LjMzNTktMjAuMjdjNS40OTIyLTUuNDkyMiAxMi42OTEtOC4zMzU5IDIwLjI3LTguMzM1OXMxNC45NjUgMy4wMzEyIDIwLjI3IDguMzM1OWM3Ljk1NyA3Ljk1NyAxMC4yMyAxOS4xMzMgNy4wMDc4IDI4Ljk4NCA0LjE2OC0yLjA4MiA4LjUyMzQtMy43ODkxIDEzLjA3LTQuNTQ2OSAwLjE4NzUtMS4zMjQyIDAuMzc4OTEtMi42NTIzIDAuMzc4OTEtMy45NzY2IDAtMTAuOTg4LTQuMTY4LTIxLjIxNS0xMS45MzQtMjguNzkzLTcuNzY1Ni03Ljc2NTYtMTcuOTk2LTExLjkzNC0yOC43OTMtMTEuOTM0LTEwLjk4OCAwLTIxLjIxNSA0LjE2OC0yOC43OTMgMTEuOTM0LTE1LjkxNCAxNS45MTQtMTUuOTE0IDQxLjY3NiAwIDU3Ljc3N2w0OS4yNTQgNDkuMjU0YzExLjE3NiAxMS4xNzYgMTEuMTc2IDI5LjU1MSAwIDQwLjcyNy01LjY4MzYgNS42ODM2LTEyLjg4MyA4LjMzNTktMjAuMjcgOC4zMzU5LTcuMzg2NyAwLTE0LjU4Ni0yLjY1MjMtMjAuMjctOC4zMzU5LTUuNDkyMi01LjQ5MjItOC4zMzU5LTEyLjY5MS04LjMzNTktMjAuMjcgMC0zLjAzMTIgMC4zNzg5MS01Ljg3MTEgMS4zMjQyLTguNzE0OC00LjE2OCAyLjA4Mi04LjUyMzQgMy43ODkxLTEzLjA3IDQuNTQ2OS0xLjEzNjcgMTEuNzQ2IDIuNjUyMyAyMy44NjcgMTEuNzQ2IDMyLjk2MSA3Ljc2NTYgNy43NjU2IDE3Ljk5NiAxMS45MzQgMjguNzkzIDExLjkzNCAxMC45ODggMCAyMS4yMTUtNC4xNjggMjguNzkzLTExLjkzNCA3LjU3ODEtNy41NzgxIDExLjkzNC0xNy45OTYgMTEuOTM0LTI4Ljc5MyAwLTEwLjk4OC00LjE2OC0yMS4yMTUtMTEuOTM0LTI4Ljc5M3oiLz4KICA8cGF0aCBkPSJtNDU0LjA1IDM0Ny40Yy03LjU3ODEtNy41NzgxLTE3Ljk5Ni0xMS45MzQtMjguNzkzLTExLjkzNC0xMC45ODggMC0yMS4yMTUgNC4xNjgtMjguNzkzIDExLjkzNGwtMTYuNjcyIDE2LjY3MiA4LjMzNTkgOC4zMzU5IDE2LjY2OC0xNi42NjhjMTEuMTc2LTExLjE3NiAyOS41NTEtMTEuMTc2IDQwLjcyNyAwczExLjE3NiAyOS41NTEgMCA0MC43MjdjLTUuNjgzNiA1LjY4MzYtMTIuODgzIDguMzM1OS0yMC4yNyA4LjMzNTktMi44Mzk4IDAtNS44NzExLTAuMzc4OTEtOC43MTQ4LTEuNTE1NiAyLjA4MiA0LjE2OCAzLjc4OTEgOC41MjM0IDQuNTQ2OSAxMy4wNyAxLjMyNDIgMC4xODc1IDIuNjUyMyAwLjM3ODkxIDMuOTc2NiAwLjM3ODkxIDEwLjk4OCAwIDIxLjIxNS00LjE2OCAyOC43OTMtMTEuOTM0IDcuNzY1Ni03Ljc2NTYgMTEuOTM0LTE3Ljk5NiAxMS45MzQtMjguNzkzIDAuMTk1MzEtMTAuODA1LTMuOTcyNy0yMS4wMzUtMTEuNzM4LTI4LjYwOXoiLz4KIDwvZz4KPC9zdmc+Cg=="
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

                        
                            <div className="btn btn-dark SignInBtn" onClick={() => setModalShow(true)}> Sign in</div>
                            <Modal show={modalShow} onHide={()=> setModalShow(false)}/>
                    </div>
                    </div>
                </div>
            </nav>
            <div className="mt-3 d-flex justify-content-center"></div>
           
        </div>
    );
}

export default NavBar;

