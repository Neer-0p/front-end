import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'


function Service() {
    return (
        <div>
            <Header />
            <div>
                {/* Page Header Start */}
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-4">
                        <h1 className="display-3 animated slideInDown">Service</h1>
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
                                <li className="breadcrumb-item active" aria-current="page">Service</li>
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
                {/* Service Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-md-12 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                                <div className="service-title">
                                    <h1 className="display-6 mb-4">What We Do for Those in Need.</h1>
                                    <p className="fs-5 mb-0">We work to bring smiles, hope, and a brighter future to those in need.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-9">
                                <div className="row g-5">
                                    <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="service-item h-100">
                                            <div className="btn-square bg-light mb-4">
                                                <i className="fa fa-droplet fa-2x text-secondary" />
                                            </div>
                                            <h3>Pure Water</h3>
                                            <p className="mb-2">We’re creating programs that address urgent needs while fostering
                                                long-term solutions for sustainable change.</p>
                                            <a href="#!">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="service-item h-100">
                                            <div className="btn-square bg-light mb-4">
                                                <i className="fa fa-hospital fa-2x text-secondary" />
                                            </div>
                                            <h3>Health Care</h3>
                                            <p className="mb-2">We’re creating programs that address urgent needs while fostering
                                                long-term solutions for sustainable change.</p>
                                            <a href="#!">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="service-item h-100">
                                            <div className="btn-square bg-light mb-4">
                                                <i className="fa fa-hands-holding-child fa-2x text-secondary" />
                                            </div>
                                            <h3>Social Care</h3>
                                            <p className="mb-2">We’re creating programs that address urgent needs while fostering
                                                long-term solutions for sustainable change.</p>
                                            <a href="#!">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="service-item h-100">
                                            <div className="btn-square bg-light mb-4">
                                                <i className="fa fa-bowl-food fa-2x text-secondary" />
                                            </div>
                                            <h3>Healthy Food</h3>
                                            <p className="mb-2">We’re creating programs that address urgent needs while fostering
                                                long-term solutions for sustainable change.</p>
                                            <a href="#!">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="service-item h-100">
                                            <div className="btn-square bg-light mb-4">
                                                <i className="fa fa-school-flag fa-2x text-secondary" />
                                            </div>
                                            <h3>Primary Education</h3>
                                            <p className="mb-2">We’re creating programs that address urgent needs while fostering
                                                long-term solutions for sustainable change.</p>
                                            <a href="#!">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="service-item h-100">
                                            <div className="btn-square bg-light mb-4">
                                                <i className="fa fa-home fa-2x text-secondary" />
                                            </div>
                                            <h3>Residence Facilities</h3>
                                            <p className="mb-2">We’re creating programs that address urgent needs while fostering
                                                long-term solutions for sustainable change.</p>
                                            <a href="#!">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
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
            </div>
            <Footer />
        </div>
    )
}

export default Service