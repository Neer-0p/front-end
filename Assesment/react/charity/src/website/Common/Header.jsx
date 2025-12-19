import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('Uid')){
            redirect("/ulogin")
        }
    })

    const logout = ()=>{
        localStorage.removeItem('Uid')
        localStorage.removeItem('Uname')
        toast.success("successfully logout")
        redirect("/")
    }

    return (
        <div>

            <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-secondary top-bar wow fadeIn" data-wow-delay="0.1s">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-4 text-center text-lg-start">
                            <NavLink to="/">
                                <h1 className="display-5 text-primary m-0">Charitize</h1>
                            </NavLink>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="d-flex justify-content-end">
                                        <div className="flex-shrink-0 btn-square bg-primary">
                                            <i className="fa fa-phone-alt text-dark" />
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="text-primary mb-0">Call Us</h6>
                                            <span className="text-white">+012 345 6789</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex justify-content-end">
                                        <div className="flex-shrink-0 btn-square bg-primary">
                                            <i className="fa fa-envelope-open text-dark" />
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="text-primary mb-0">Mail Us</h6>
                                            <span className="text-white">info@domain.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex justify-content-end">
                                        <div className="flex-shrink-0 btn-square bg-primary">
                                            <i className="fa fa-map-marker-alt text-dark" />
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="text-primary mb-0">Address</h6>
                                            <span className="text-white">123 Street, NY, USA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar Start */}
                <div className="container-fluid bg-secondary px-0 wow fadeIn" data-wow-delay="0.1s">
                    <div className="nav-bar">
                        <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-0">
                            <h4 className="d-lg-none m-0">Menu</h4>
                            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav me-auto">
                                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                    <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                                    <NavLink to="/donation" className="nav-item nav-link">Donation</NavLink>
                                    <div className="nav-item dropdown">
                                        <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu bg-light m-0">
                                            <NavLink to="/event" className="dropdown-item">Event</NavLink>
                                            <NavLink to="/feature" className="dropdown-item">Feature</NavLink>
                                            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                            <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                        </div>
                                    </div>
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>
                                <div className="d-none d-lg-flex ms-auto">
                                    <a className="btn btn-square btn-dark ms-2" href="#!"><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square btn-dark ms-2" href="#!"><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square btn-dark ms-2" href="#!"><i className="fab fa-youtube" /></a>
                                </div>
                                <div className="d-flex">
                                    {
                                        (()=>{
                                            if(localStorage.getItem('Uid')){
                                                return(
                                                    <button className="nav-item nav-link btn btn-dark mx-2">{localStorage.getItem("Uname")}</button>
                                                )
                                            }
                                        })()
                                    }
                                    {
                                        (()=>{
                                            if(localStorage.getItem('Uid')){
                                                return(
                                                    <button onClick={logout} className='nav-item nav-link btn btn-dark'>Logout</button>
                                                )
                                            }
                                            else{
                                                return(
                                                    <NavLink to="/ulogin" className="nav-item nav-link">Ulogin</NavLink>
                                                )
                                            }
                                        })()
                                    }
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Navbar End */}

            </div>

        </div>
    )
}

export default Header