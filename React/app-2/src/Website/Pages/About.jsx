import React from 'react'
import Nav from '../Comm/Nav'
import Bottom from '../Comm/Bottom'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <Nav />
        <h1 className='p-5 bg-secondary text-light'>This is About page</h1>
        <Link to="/about/about1" className='btn btn-danger'>About1</Link>
        <Link to="/about/about2" className='btn btn-danger ms-2'>About2</Link>
        <Outlet />
        <Bottom />
    </div>
  )
}

export default About