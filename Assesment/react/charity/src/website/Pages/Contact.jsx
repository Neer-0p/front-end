import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'


function Contact() {
    return (
        <div>
            <Header />
            <div>
                {/* Page Header Start */}
                <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container text-center py-4">
                        <h1 className="display-3 animated slideInDown">Contact</h1>
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
                                <li className="breadcrumb-item active" aria-current="page">Contact</li>
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
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                                <p className="section-title bg-white text-start text-primary pe-3">Contact</p>
                                <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">If You Have Any Query, Please Contact Us
                                </h1>
                                <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ height: 425, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
                                <h3>Need a functional contact form?</h3>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form
                                    with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're
                                    done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 250 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary py-3 px-4" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
            </div>
            <Footer />
        </div>
    )
}

export default Contact