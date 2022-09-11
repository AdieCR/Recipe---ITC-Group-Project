import React from "react";
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="LandingPageContainer">
            <div className="d-flex justify-content-left LandingPageContent">
                <div className="heading titleBold">It is even better than</div>
                <div className="heading titleBold">an expensive CookBook</div>
            </div>
            {/* <div className="d-flex justify-content-center">
                <span className="text titleBold">an expensive CookBook</span>
            </div> */}
            <div className="d-flex justify-content-left">
                <span className="text1 LandingPageSmallText">
                    Learn how to make your favorite restaurant's dishes
                    
                </span>
            </div>
            <div className=" mt-3 d-flex justify-content-center gap-3">
                <div className="btn btn-success">Get Started</div>
                <div className="btn1">
                    <div className="d-flex flex-row align-items-center justify-content-center gap-1 buttonitems">
                        <i className="fa fa-play-circle-o fs-3 mt-1"></i>
                        Play Video
                    </div>
                </div>
            </div>
            <div className="row mt-5 p-3 g-3 d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="card2 p-2 py-3">
                        <div className="text-center d-flex flex-column align-items-center">
                            <div>
                                <img
                                    src="https://i.imgur.com/YzEqP6e.png"
                                    height="50px"
                                    width="50px"
                                />
                            </div>
                            <span className="stellar">Stellar</span>
                            <span className="hosting">Shared Hosting</span>
                            <span className="price mt-2">
                                $ 0.99<span class="small"> /mo</span>
                            </span>
                            <span className="year">On first year</span>
                            <button className="btn btn-success mt-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card2 p-2 py-3">
                        <div className="text-center d-flex flex-column align-items-center">
                            <div>
                                <img
                                    src="https://i.imgur.com/f4B2c2B.png"
                                    height="50px"
                                    width="50px"
                                />
                            </div>
                            <span className="stellar">Stellar Pro</span>
                            <span className="hosting">Shared Hosting</span>
                            <span className="price mt-2">
                                $ 0.99<span class="small"> /mo</span>
                            </span>
                            <span className="year">On first year</span>
                            <button className="btn2 btn-success mt-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card2 p-2 py-3">
                        <div className="text-center d-flex flex-column align-items-center">
                            <div>
                                <img
                                    src=" https://i.imgur.com/C4CUnKG.png"
                                    height="50px"
                                    width="50px"
                                />
                            </div>
                            <span className="stellar">Pro Business</span>
                            <span className="hosting">Shared Hosting</span>
                            <span className="price mt-2">
                                $ 0.99<span class="small"> /mo</span>
                            </span>
                            <span className="year">On first year</span>
                            <button className="btn3 btn-success mt-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
