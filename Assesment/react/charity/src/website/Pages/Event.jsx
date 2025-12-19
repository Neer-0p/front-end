import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'


function Event() {
    return (
        <div>
            <Header />
            <div>
                {/* Page Header Start */}
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-4">
                        <h1 className="display-3 animated slideInDown">Event</h1>
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
                                <li className="breadcrumb-item active" aria-current="page">Event</li>
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
                {/* Event Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="section-title bg-white text-center text-primary px-3">Events</p>
                            <h1 className="display-6 mb-4">Be a Part of a Global Movement</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="event-item h-100 p-4">
                                    <img className="img-fluid w-100 mb-4" src="img/event-1.jpg" alt />
                                    <a href="#!" className="h3 d-inline-block">Education Program</a>
                                    <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                                    <div className="bg-light p-4">
                                        <p className="mb-1"><i className="fa fa-clock text-primary me-2" />10:00 AM - 18:00 PM</p>
                                        <p className="mb-1"><i className="fa fa-calendar-alt text-primary me-2" />Jan 01 - Jan 10</p>
                                        <p className="mb-0"><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York,
                                            USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="event-item h-100 p-4">
                                    <img className="img-fluid w-100 mb-4" src="img/event-2.jpg" alt />
                                    <a href="#!" className="h3 d-inline-block">Awareness Program</a>
                                    <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                                    <div className="bg-light p-4">
                                        <p className="mb-1"><i className="fa fa-clock text-primary me-2" />10:00 AM - 18:00 PM</p>
                                        <p className="mb-1"><i className="fa fa-calendar-alt text-primary me-2" />Jan 01 - Jan 10</p>
                                        <p className="mb-0"><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York,
                                            USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="event-item h-100 p-4">
                                    <img className="img-fluid w-100 mb-4" src="img/event-3.jpg" alt />
                                    <a href="#!" className="h3 d-inline-block">Health Care Program</a>
                                    <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                                    <div className="bg-light p-4">
                                        <p className="mb-1"><i className="fa fa-clock text-primary me-2" />10:00 AM - 18:00 PM</p>
                                        <p className="mb-1"><i className="fa fa-calendar-alt text-primary me-2" />Jan 01 - Jan 10</p>
                                        <p className="mb-0"><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York,
                                            USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="event-item h-100 p-4">
                                    <img className="img-fluid w-100 mb-4" src="img/event-1.jpg" alt />
                                    <a href="#!" className="h3 d-inline-block">Education Program</a>
                                    <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                                    <div className="bg-light p-4">
                                        <p className="mb-1"><i className="fa fa-clock text-primary me-2" />10:00 AM - 18:00 PM</p>
                                        <p className="mb-1"><i className="fa fa-calendar-alt text-primary me-2" />Jan 01 - Jan 10</p>
                                        <p className="mb-0"><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York,
                                            USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="event-item h-100 p-4">
                                    <img className="img-fluid w-100 mb-4" src="img/event-2.jpg" alt />
                                    <a href="#!" className="h3 d-inline-block">Awareness Program</a>
                                    <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                                    <div className="bg-light p-4">
                                        <p className="mb-1"><i className="fa fa-clock text-primary me-2" />10:00 AM - 18:00 PM</p>
                                        <p className="mb-1"><i className="fa fa-calendar-alt text-primary me-2" />Jan 01 - Jan 10</p>
                                        <p className="mb-0"><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York,
                                            USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="event-item h-100 p-4">
                                    <img className="img-fluid w-100 mb-4" src="img/event-3.jpg" alt />
                                    <a href="#!" className="h3 d-inline-block">Health Care Program</a>
                                    <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                                    <div className="bg-light p-4">
                                        <p className="mb-1"><i className="fa fa-clock text-primary me-2" />10:00 AM - 18:00 PM</p>
                                        <p className="mb-1"><i className="fa fa-calendar-alt text-primary me-2" />Jan 01 - Jan 10</p>
                                        <p className="mb-0"><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York,
                                            USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Event End */}
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

export default Event