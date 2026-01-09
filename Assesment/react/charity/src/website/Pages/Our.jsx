import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'


function Our() {
    return (
        <div>
            <Header />
            <div>
                {/* Page Header Start */}
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-4">
                        <h1 className="display-3 animated slideInDown">Our Team</h1>
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
                                <li className="breadcrumb-item active" aria-current="page">Our Team</li>
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
                {/* Team Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
                            <h1 className="display-6 mb-4">Meet Our Dedicated Team Members</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="team-item d-flex h-100 p-4">
                                    <div className="team-detail pe-4">
                                        <img className="img-fluid mb-4" src="img/team-1.jpg" alt />
                                        <h3>Boris Johnson</h3>
                                        <span>Founder &amp; CEO</span>
                                    </div>
                                    <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-x-twitter" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="team-item d-flex h-100 p-4">
                                    <div className="team-detail pe-4">
                                        <img className="img-fluid mb-4" src="img/team-2.jpg" alt />
                                        <h3>Donald Pakura</h3>
                                        <span>Project Manager</span>
                                    </div>
                                    <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-x-twitter" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="team-item d-flex h-100 p-4">
                                    <div className="team-detail pe-4">
                                        <img className="img-fluid mb-4" src="img/team-3.jpg" alt />
                                        <h3>Alexander Bell</h3>
                                        <span>Volunteer</span>
                                    </div>
                                    <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-x-twitter" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="team-item d-flex h-100 p-4">
                                    <div className="team-detail pe-4">
                                        <img className="img-fluid mb-4" src="img/team-1.jpg" alt />
                                        <h3>Boris Johnson</h3>
                                        <span>Founder &amp; CEO</span>
                                    </div>
                                    <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-x-twitter" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="team-item d-flex h-100 p-4">
                                    <div className="team-detail pe-4">
                                        <img className="img-fluid mb-4" src="img/team-2.jpg" alt />
                                        <h3>Donald Pakura</h3>
                                        <span>Project Manager</span>
                                    </div>
                                    <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-x-twitter" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="team-item d-flex h-100 p-4">
                                    <div className="team-detail pe-4">
                                        <img className="img-fluid mb-4" src="img/team-3.jpg" alt />
                                        <h3>Alexander Bell</h3>
                                        <span>Volunteer</span>
                                    </div>
                                    <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-x-twitter" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary my-2" href="#!"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
            </div>
            <Footer />
        </div>
    )
}

export default Our