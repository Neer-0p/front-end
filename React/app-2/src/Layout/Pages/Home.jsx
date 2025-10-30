import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Home() {
  return (
    <div>
        <Header />
        <h1 className='p-5 m-0 text-center bg-success text-light'>This is Home page</h1>
        <Footer />
    </div>
  )
}

export default Home