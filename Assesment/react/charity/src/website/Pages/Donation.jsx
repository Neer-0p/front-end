import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'



function Donation() {
    return (
        <div>
            <Header />
            <div>
                {/* Page Header Start */}
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-4">
                        <h1 className="display-3 animated slideInDown">Donation</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item dropdown">
                                    <a className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/event">Event</Link></li>
                                        <li><Link className="dropdown-item" to="/feature">Feature</Link></li>
                                        <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                                        <li><Link className="dropdown-item" to="/testinomial">Testinomial</Link></li>
                                    </ul>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Donation</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Video Start */}
                <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-11">
                                <div className="h-100 py-5 d-flex align-items-center">
                                    <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                        <span />
                                    </button>
                                    <h3 className="ms-5 mb-0">Together, we can build a world where everyone has the chance to thrive.
                                    </h3>
                                </div>
                            </div>
                            <div className="d-none d-lg-block col-lg-1">
                                <div className="h-100 w-100 bg-secondary d-flex align-items-center justify-content-center">
                                    <span className="text-white" style={{ transform: 'rotate(-90deg)' }}>Scroll Down</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video End */}
                {/* Video Modal Start */}
                <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* 16:9 aspect ratio */}
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video Modal End */}
                {/* Donation Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="section-title bg-white text-center text-primary px-3">Donation</p>
                            <h1 className="display-6 mb-4">Our Donation Causes Around the World</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="donation-item d-flex h-100 p-4">
                                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                                        <h6 className="mb-0">Raised</h6>
                                        <span className="mb-2">$8000</span>
                                        <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                                            <div className="progress-bar w-100 bg-secondary" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="fs-4">85%</span>
                                            </div>
                                        </div>
                                        <h6 className="mb-0">Goal</h6>
                                        <span>$10000</span>
                                    </div>
                                    <div className="donation-detail">
                                        <div className="position-relative mb-4">
                                            <img className="img-fluid w-100" src="img/donation-1.jpg" alt />
                                            <a href="#!" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Food</a>
                                        </div>
                                        <a href="#!" className="h3 d-inline-block">Healthy Food</a>
                                        <p>Through your donations and volunteer work, we spread kindness and support to children.
                                        </p>
                                        <a href="#!" className="btn btn-primary w-100 py-3"><i className="fa fa-plus me-2" />Donate
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.13s">
                                <div className="donation-item d-flex h-100 p-4">
                                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                                        <h6 className="mb-0">Raised</h6>
                                        <span className="mb-2">$8000</span>
                                        <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                                            <div className="progress-bar w-100 bg-secondary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="fs-4">95%</span>
                                            </div>
                                        </div>
                                        <h6 className="mb-0">Goal</h6>
                                        <span>$10000</span>
                                    </div>
                                    <div className="donation-detail">
                                        <div className="position-relative mb-4">
                                            <img className="img-fluid w-100" src="img/donation-2.jpg" alt />
                                            <a href="#!" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Health</a>
                                        </div>
                                        <a href="#!" className="h3 d-inline-block">Water Treatment</a>
                                        <p>Through your donations and volunteer work, we spread kindness and support to children.
                                        </p>
                                        <a href="#!" className="btn btn-primary w-100 py-3"><i className="fa fa-plus me-2" />Donate
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="donation-item d-flex h-100 p-4">
                                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                                        <h6 className="mb-0">Raised</h6>
                                        <span className="mb-2">$8000</span>
                                        <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                                            <div className="progress-bar w-100 bg-secondary" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="fs-4">75%</span>
                                            </div>
                                        </div>
                                        <h6 className="mb-0">Goal</h6>
                                        <span>$10000</span>
                                    </div>
                                    <div className="donation-detail">
                                        <div className="position-relative mb-4">
                                            <img className="img-fluid w-100" src="img/donation-3.jpg" alt />
                                            <a href="#!" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Education</a>
                                        </div>
                                        <a href="#!" className="h3 d-inline-block">Education Support</a>
                                        <p>Through your donations and volunteer work, we spread kindness and support to children.
                                        </p>
                                        <a href="#!" className="btn btn-primary w-100 py-3"><i className="fa fa-plus me-2" />Donate
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="donation-item d-flex h-100 p-4">
                                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                                        <h6 className="mb-0">Raised</h6>
                                        <span className="mb-2">$8000</span>
                                        <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                                            <div className="progress-bar w-100 bg-secondary" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="fs-4">85%</span>
                                            </div>
                                        </div>
                                        <h6 className="mb-0">Goal</h6>
                                        <span>$10000</span>
                                    </div>
                                    <div className="donation-detail">
                                        <div className="position-relative mb-4">
                                            <img className="img-fluid w-100" src="img/donation-1.jpg" alt />
                                            <a href="#!" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Food</a>
                                        </div>
                                        <a href="#!" className="h3 d-inline-block">Healthy Food</a>
                                        <p>Through your donations and volunteer work, we spread kindness and support to children.
                                        </p>
                                        <a href="#!" className="btn btn-primary w-100 py-3"><i className="fa fa-plus me-2" />Donate
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.13s">
                                <div className="donation-item d-flex h-100 p-4">
                                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                                        <h6 className="mb-0">Raised</h6>
                                        <span className="mb-2">$8000</span>
                                        <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                                            <div className="progress-bar w-100 bg-secondary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="fs-4">95%</span>
                                            </div>
                                        </div>
                                        <h6 className="mb-0">Goal</h6>
                                        <span>$10000</span>
                                    </div>
                                    <div className="donation-detail">
                                        <div className="position-relative mb-4">
                                            <img className="img-fluid w-100" src="img/donation-2.jpg" alt />
                                            <a href="#!" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Health</a>
                                        </div>
                                        <a href="#!" className="h3 d-inline-block">Water Treatment</a>
                                        <p>Through your donations and volunteer work, we spread kindness and support to children.
                                        </p>
                                        <a href="#!" className="btn btn-primary w-100 py-3"><i className="fa fa-plus me-2" />Donate
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="donation-item d-flex h-100 p-4">
                                    <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                                        <h6 className="mb-0">Raised</h6>
                                        <span className="mb-2">$8000</span>
                                        <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                                            <div className="progress-bar w-100 bg-secondary" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="fs-4">75%</span>
                                            </div>
                                        </div>
                                        <h6 className="mb-0">Goal</h6>
                                        <span>$10000</span>
                                    </div>
                                    <div className="donation-detail">
                                        <div className="position-relative mb-4">
                                            <img className="img-fluid w-100" src="img/donation-3.jpg" alt />
                                            <a href="#!" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Education</a>
                                        </div>
                                        <a href="#!" className="h3 d-inline-block">Education Support</a>
                                        <p>Through your donations and volunteer work, we spread kindness and support to children.
                                        </p>
                                        <a href="#!" className="btn btn-primary w-100 py-3"><i className="fa fa-plus me-2" />Donate
                                            Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Donation End */}
                {/* Donate Start */}
                <div className="container-fluid donate py-5">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-7 donate-text bg-light py-5 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex flex-column justify-content-center h-100 p-5 wow fadeIn" data-wow-delay="0.3s">
                                    <h1 className="display-6 mb-4">Let's Donate to Needy People for Better Lives</h1>
                                    <p className="fs-5 mb-0">Through your donations, we spread kindness and support to children,
                                        families, and communities struggling to find stability.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 donate-form bg-primary py-5 text-center wow fadeIn" data-wow-delay="0.5s">
                                <div className="h-100 p-5">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                                    <label className="btn btn-light" htmlFor="btnradio1">$10</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                                    <label className="btn btn-light" htmlFor="btnradio2">$20</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                                    <label className="btn btn-light" htmlFor="btnradio3">$30</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                                                    <label className="btn btn-light" htmlFor="btnradio4">$40</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" />
                                                    <label className="btn btn-light" htmlFor="btnradio5">$50</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-secondary py-3 w-100" type="submit">Donate Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Donate End */}
            </div>
            <Footer />
        </div>
    )
}

export default Donation