import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div>
                {/* Newsletter Start */}
                <div className="container-fluid bg-primary py-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-6 mb-4">Subscribe the Newsletter</h1>
                                <div className="position-relative w-100 mb-2">
                                    <input className="form-control border-0 w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: 60 }} />
                                    <button type="button" className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
                                </div>
                                <p className="mb-0">Don't worry, we won't spam you with emails.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter End */}

                {/* Footer Start */}
                <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row g-5 py-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Our Office</h4>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                                <div className="d-flex pt-3">
                                    <Link className="btn btn-square btn-primary me-2" to="error"><i className="fab fa-x-twitter" /></Link>
                                    <Link className="btn btn-square btn-primary me-2" to="error"><i className="fab fa-facebook-f" /></Link>
                                    <Link className="btn btn-square btn-primary me-2" to="error"><i className="fab fa-youtube" /></Link>
                                    <Link className="btn btn-square btn-primary me-2" to="error"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Quick Links</h4>
                                <Link className="btn btn-link" to="/about">About Us</Link>
                                <Link className="btn btn-link" to="/contact">Contact Us</Link>
                                <Link className="btn btn-link" to="/service">Our Services</Link>
                                <Link className="btn btn-link" to="error">Terms &amp; Condition</Link>
                                <Link className="btn btn-link" to="error">Support</Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Business Hours</h4>
                                <p className="mb-1">Monday - Friday</p>
                                <h6 className="text-light">09:00 am - 07:00 pm</h6>
                                <p className="mb-1">Saturday</p>
                                <h6 className="text-light">09:00 am - 12:00 pm</h6>
                                <p className="mb-1">Sunday</p>
                                <h6 className="text-light">Closed</h6>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Gallery</h4>
                                <div className="row g-2">
                                    <div className="col-4">
                                        <img className="img-fluid w-100" src="img/gallery-1.jpg" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid w-100" src="img/gallery-2.jpg" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid w-100" src="img/gallery-3.jpg" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid w-100" src="img/gallery-4.jpg" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid w-100" src="img/gallery-5.jpg" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid w-100" src="img/gallery-6.jpg" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright pt-5">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    © <a className="fw-semi-bold" href="#!">Your Site Name</a>, All Right Reserved.
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                                    {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                                    {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                                    Designed By <a className="fw-semi-bold" href="https://htmlcodex.com">HTML Codex</a>. Distributed by
                                    <a className="fw-semi-bold" href="https://themewagon.com">ThemeWagon</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Back to Top */}
                <button onClick={top} className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></button>
            </div>
        </div>
    )
}

export default Footer