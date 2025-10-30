import React from 'react'
import Header from '../Commonpages/Header'
import Footer from '../Commonpages/Footer'
import { Link, NavLink, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Header />
      <div className='fs-1 p-5 bg-danger text-center'>
        <h1>This is About page</h1>
        <Link to='/about/about1' className='btn btn-success me-3'>About 1</Link>
        <Link to='/about/about2' className='btn btn-success'>About 2</Link>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default About