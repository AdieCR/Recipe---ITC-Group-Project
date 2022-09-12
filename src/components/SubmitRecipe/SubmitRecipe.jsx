import React from "react";

function SubmitRecipe() {
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
                    recipe you came up with?
                </span>
            </div>
            <div className="card-body px-0">
                <div className="row justify-content-center mb-5">
                    <div className="row justify-content-center round">
                        <div className="col-lg-10 col-md-12 ">
                            <div className="card shadow-lg card-1">
                                <div className="card-body inner-card">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-5 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label for="first-name">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="first-name"
                                                    placeholder="Type your Name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label for="Mobile-Number">
                                                    Mobile Number
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Mobile-Number"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label for="inputEmail4">
                                                    Project Type
                                                </label>
                                                <select className="form-control">
                                                    {" "}
                                                    <option>
                                                        Web Design
                                                    </option>{" "}
                                                    <option>Blockchain</option>{" "}
                                                    <option>ML</option>{" "}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label for="time">
                                                    Maximum time for the project
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="time"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="skill">
                                                    Required Skills
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="skill"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                {" "}
                                                <label for="last-name">
                                                    Last Name
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="last-name"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label for="phone">
                                                    Email
                                                </label>{" "}
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label for="Evaluate Budget">
                                                    Evaluate Budget
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Evaluate Budget"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label for="Company-Name">
                                                    Company Name
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Company-Name"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                {" "}
                                                <label for="inputEmail4">
                                                    Country
                                                </label>
                                                <select className="form-control">
                                                    {" "}
                                                    <option>India</option>{" "}
                                                    <option>China</option>{" "}
                                                    <option>UK</option>{" "}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 col-lg-10 col-12">
                                            <div className="form-group files">
                                                <label className="my-auto">
                                                    Upload Your File{" "}
                                                </label>{" "}
                                                <input
                                                    id="file"
                                                    type="file"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 col-lg-10 col-12">
                                            <div className="form-group">
                                                {" "}
                                                <label for="exampleFormControlTextarea2">
                                                    Message
                                                </label>
                                                <textarea
                                                    className="form-control rounded-0"
                                                    id="exampleFormControlTextarea2"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                            <div className="mb-2 mt-4">
                                                <div className="text-right">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-block"
                                                    >
                                                        <small className="font-weight-bold">
                                                            Request a Quote
                                                        </small>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmitRecipe;
