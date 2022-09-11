import React from "react";

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
                    recipe you came up with?
                </span>
            </div>
            <div class="card-body px-0">
                <div class="row justify-content-center mb-5">
                    <div class="row justify-content-center round">
                        <div class="col-lg-10 col-md-12 ">
                            <div class="card shadow-lg card-1">
                                <div class="card-body inner-card">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label for="first-name">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="first-name"
                                                    placeholder="Type your Name"
                                                />
                                            </div>
                                            <div class="form-group">
                                                {" "}
                                                <label for="Mobile-Number">
                                                    Mobile Number
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="Mobile-Number"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div class="form-group">
                                                {" "}
                                                <label for="inputEmail4">
                                                    Project Type
                                                </label>
                                                <select class="form-control">
                                                    {" "}
                                                    <option>
                                                        Web Design
                                                    </option>{" "}
                                                    <option>Blockchain</option>{" "}
                                                    <option>ML</option>{" "}
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                {" "}
                                                <label for="time">
                                                    Maximum time for the project
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="time"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="skill">
                                                    Required Skills
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="skill"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                {" "}
                                                <label for="last-name">
                                                    Last Name
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="last-name"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div class="form-group">
                                                {" "}
                                                <label for="phone">
                                                    Email
                                                </label>{" "}
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="email"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div class="form-group">
                                                {" "}
                                                <label for="Evaluate Budget">
                                                    Evaluate Budget
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="Evaluate Budget"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div class="form-group">
                                                {" "}
                                                <label for="Company-Name">
                                                    Company Name
                                                </label>{" "}
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="Company-Name"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div class="form-group">
                                                {" "}
                                                <label for="inputEmail4">
                                                    Country
                                                </label>
                                                <select class="form-control">
                                                    {" "}
                                                    <option>India</option>{" "}
                                                    <option>China</option>{" "}
                                                    <option>UK</option>{" "}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group files">
                                                <label class="my-auto">
                                                    Upload Your File{" "}
                                                </label>{" "}
                                                <input
                                                    id="file"
                                                    type="file"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 col-lg-10 col-12">
                                            <div class="form-group">
                                                {" "}
                                                <label for="exampleFormControlTextarea2">
                                                    Message
                                                </label>
                                                <textarea
                                                    class="form-control rounded-0"
                                                    id="exampleFormControlTextarea2"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                            <div class="mb-2 mt-4">
                                                <div class="text-right">
                                                    <button
                                                        type="button"
                                                        class="btn btn-primary btn-block"
                                                    >
                                                        <small class="font-weight-bold">
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
