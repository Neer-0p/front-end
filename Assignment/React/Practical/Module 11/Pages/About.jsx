import React from 'react'
import Header from '../Commonpages/Header'
import Footer from '../Commonpages/Footer'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
        <Header />
        <div className='fs-1 p-5 bg-danger text-center'>
            <h1>This is About page</h1>
            <NavLink to='/about1' className='btn btn-success me-3'>About 1</NavLink>
            <NavLink to='/about2' className='btn btn-success'>About 2</NavLink>
            </div>
        <Footer />
    </div>
  )
}

export default About