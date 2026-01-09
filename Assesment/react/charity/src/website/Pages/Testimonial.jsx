import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'


function Testimonial() {
    return (
        <div>
            <Header />
            <div>
                {/* Page Header Start */}
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-4">
                        <h1 className="display-3 animated slideInDown">Testimonial</h1>
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
                                <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
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
                {/* Testimonial Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-md-12 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                                <div className="testimonial-title">
                                    <h1 className="display-6 mb-4">What People Say About Our Activities.</h1>
                                    <p className="fs-5 mb-0">We work to bring smiles, hope, and a brighter future to those in need.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-9">
                                <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.3s">
                                    <div className="testimonial-item">
                                        <div className="row g-5 align-items-center">
                                            <div className="col-md-6">
                                                <div className="testimonial-img">
                                                    <img className="img-fluid" src="img/testimonial-1.jpg" alt />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="testimonial-text pb-5 pb-md-0">
                                                    <div className="mb-2">
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                    </div>
                                                    <p className="fs-5">Education is the foundation of change. By funding schools,
                                                        scholarships, and training programs, we can help children and adults unlock
                                                        their potential for a better future.</p>
                                                    <div className="d-flex align-items-center">
                                                        <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                                                            <i className="fa fa-quote-right fa-2x" />
                                                        </div>
                                                        <div className="ps-3">
                                                            <h5 className="mb-0">Alexander Bell</h5>
                                                            <span>CEO, Founder</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="row g-5 align-items-center">
                                            <div className="col-md-6">
                                                <div className="testimonial-img">
                                                    <img className="img-fluid" src="img/testimonial-2.jpg" alt />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="testimonial-text pb-5 pb-md-0">
                                                    <div className="mb-2">
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                    </div>
                                                    <p className="fs-5">Every hand extended in kindness brings us closer to a world free
                                                        from suffering. Be part of a global movement dedicated to building a future
                                                        where equality and compassion thrive.</p>
                                                    <div className="d-flex align-items-center">
                                                        <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                                                            <i className="fa fa-quote-right fa-2x" />
                                                        </div>
                                                        <div className="ps-3">
                                                            <h5 className="mb-0">Donald Pakura</h5>
                                                            <span>CEO, Founder</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="row g-5 align-items-center">
                                            <div className="col-md-6">
                                                <div className="testimonial-img">
                                                    <img className="img-fluid" src="img/testimonial-3.jpg" alt />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="testimonial-text pb-5 pb-md-0">
                                                    <div className="mb-2">
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                        <i className="fa fa-star text-primary" />
                                                    </div>
                                                    <p className="fs-5">Love and compassion have the power to heal. Through your
                                                        donations and volunteer work, we can spread kindness and support to
                                                        children, families, and communities struggling to find stability.</p>
                                                    <div className="d-flex align-items-center">
                                                        <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                                                            <i className="fa fa-quote-right fa-2x" />
                                                        </div>
                                                        <div className="ps-3">
                                                            <h5 className="mb-0">Boris Johnson</h5>
                                                            <span>CEO, Founder</span>
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
                {/* Testimonial End */}
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

export default Testimonial