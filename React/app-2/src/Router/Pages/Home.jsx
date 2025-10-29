import React from 'react'
import Header from '../Commonpages/Header'
import Footer from '../Commonpages/Footer'

function Home() {
  return (
    <div>
        <Header />
        <h1 className='fs-1 mt-3 mb-0 p-5 bg-success text-center'>This is home page</h1>
        <Footer />
    </div>
  )
}

export default Home