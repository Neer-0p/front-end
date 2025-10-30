import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <Header />
            <div className='bg-info text-center'>
                <h1 className='p-5 text-center bg-info text-light'>This is About page</h1>
                <Link to="/about/about1" className='btn btn-primary mb-2'>About 1</Link>
                <Link to="/about/about2" className='btn btn-primary mb-2 mx-2'>About 2</Link>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default About