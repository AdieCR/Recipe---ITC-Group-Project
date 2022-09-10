import React from "react";

function LandingPage() {
    return (
        <div class="container mt-3">
            <div class="LandingPage">
                <div class="innercard p-2">
                    <div class="mt-3 d-flex justify-content-center">
                        <span class="heading">Fast & Secure</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="text">best web hosting</span>
                    </div>
                    <div class="mt-3 d-flex justify-content-center">
                        <span class="text1">
                            Extremly fast & secure website hosting Word Press
                            <br />
                            Theme.We offer Best Web hosting & Domain.
                        </span>
                    </div>
                    <div class=" mt-3 d-flex justify-content-center gap-3">
                        <div class="btn btn-success">Get Started</div>
                        <div class="btn1">
                            <div class="d-flex flex-row align-items-center justify-content-center gap-1 buttonitems">
                                <i class="fa fa-play-circle-o fs-3 mt-1"></i>
                                Play Video
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 p-2 g-3 d-flex justify-content-center">
                        <div class="col-md-4">
                            <div class="card2 p-2 py-3">
                                <div class="text-center d-flex flex-column align-items-center">
                                    <div>
                                        <img
                                            src="https://i.imgur.com/YzEqP6e.png"
                                            height="50px"
                                            width="50px"
                                        />
                                    </div>
                                    <span class="stellar">Stellar</span>
                                    <span class="hosting">Shared Hosting</span>
                                    <span class="price mt-2">
                                        $ 0.99<span class="small"> /mo</span>
                                    </span>
                                    <span class="year">On first year</span>
                                    <button class="btn btn-success mt-2">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card2 p-2 py-3">
                                <div class="text-center d-flex flex-column align-items-center">
                                    <div>
                                        <img
                                            src="https://i.imgur.com/f4B2c2B.png"
                                            height="50px"
                                            width="50px"
                                        />
                                    </div>
                                    <span class="stellar">Stellar Pro</span>
                                    <span class="hosting">Shared Hosting</span>
                                    <span class="price mt-2">
                                        $ 0.99<span class="small"> /mo</span>
                                    </span>
                                    <span class="year">On first year</span>
                                    <button class="btn2 btn-success mt-2">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card2 p-2 py-3">
                                <div class="text-center d-flex flex-column align-items-center">
                                    <div>
                                        <img
                                            src=" https://i.imgur.com/C4CUnKG.png"
                                            height="50px"
                                            width="50px"
                                        />
                                    </div>
                                    <span class="stellar">Pro Business</span>
                                    <span class="hosting">Shared Hosting</span>
                                    <span class="price mt-2">
                                        $ 0.99<span class="small"> /mo</span>
                                    </span>
                                    <span class="year">On first year</span>
                                    <button class="btn3 btn-success mt-2">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
