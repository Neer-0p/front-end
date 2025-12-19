import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'


function Feature() {
    return (
        <div>
            <Header />
            <div>
                {/* Page Header Start */}
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-4">
                        <h1 className="display-3 animated slideInDown">Feature</h1>
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
                                <li className="breadcrumb-item active" aria-current="page">Feature</li>
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
                {/* Features Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="rounded overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="text-center bg-primary py-5 px-4 h-100">
                                                <i className="fa fa-users fa-3x text-secondary mb-3" />
                                                <h1 className="display-5 mb-0" data-toggle="counter-up">500</h1>
                                                <span className="text-dark">Team Members</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="text-center bg-secondary py-5 px-4 h-100">
                                                <i className="fa fa-award fa-3x text-primary mb-3" />
                                                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">70</h1>
                                                <span className="text-white">Award Winning</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="text-center bg-secondary py-5 px-4 h-100">
                                                <i className="fa fa-list-check fa-3x text-primary mb-3" />
                                                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">3000</h1>
                                                <span className="text-white">Total Projects</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                            <div className="text-center bg-primary py-5 px-4 h-100">
                                                <i className="fa fa-comments fa-3x text-secondary mb-3" />
                                                <h1 className="display-5 mb-0" data-toggle="counter-up">7000</h1>
                                                <span className="text-dark">Client's Review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="section-title bg-white text-start text-primary pe-3">Why Us!</p>
                                <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">Few Reasons Why People Choosing Us!</h1>
                                <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">We believe in creating opportunities and empowering
                                    communities through education, healthcare, and sustainable development. Your support helps us
                                    bring smiles, hope, and a brighter future to those in need.</p>
                                <p className="text-dark wow fadeIn" data-wow-delay="0.4s"><i className="fa fa-check text-primary me-2" />Justo magna erat amet</p>
                                <p className="text-dark wow fadeIn" data-wow-delay="0.5s"><i className="fa fa-check text-primary me-2" />Aliqu diam amet diam et eos</p>
                                <p className="text-dark wow fadeIn" data-wow-delay="0.6s"><i className="fa fa-check text-primary me-2" />Clita erat ipsum et lorem et sit</p>
                                <div className="d-flex mt-4 wow fadeIn" data-wow-delay="0.7s">
                                    <a className="btn btn-primary py-3 px-4 me-3" href="#!">Donate Now</a>
                                    <a className="btn btn-secondary py-3 px-4" href="#!">Join Us Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features End */}
                {/* Banner Start */}
                <div className="container-fluid banner py-5">
                    <div className="container">
                        <div className="banner-inner bg-light p-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 py-5 text-center">
                                    <h1 className="display-6 wow fadeIn" data-wow-delay="0.3s">Our Door Are Always Open to More People
                                        Who Want to Support Each Others!</h1>
                                    <p className="fs-5 mb-4 wow fadeIn" data-wow-delay="0.5s">Through your donations and volunteer work,
                                        we spread kindness and support to children, families, and communities struggling to find
                                        stability.</p>
                                    <div className="d-flex justify-content-center wow fadeIn" data-wow-delay="0.7s">
                                        <a className="btn btn-primary py-3 px-4 me-3" href="#!">Donate Now</a>
                                        <a className="btn btn-secondary py-3 px-4" href="#!">Join Us Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
            </div>
            <Footer />
        </div>
    )
}

export default Feature