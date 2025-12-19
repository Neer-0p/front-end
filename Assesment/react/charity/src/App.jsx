import React from 'react'
import Home from './website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './website/Pages/About'
import Service from './website/Pages/Service'
import Donation from './website/Pages/Donation'
import Event from './website/Pages/Event'
import Feature from './website/Pages/Feature'
import Our from './website/Pages/Our'
import Testimonial from './website/Pages/Testimonial'
import Error from './website/Pages/Error'
import Contact from './website/Pages/Contact'
import Product from './Admin/pages/Product'
import Addpro from './Admin/pages/Addpro'
import Alogin from './Admin/pages/Alogin'
import Dash from './Admin/pages/Dash'
import User from './website/Pages/User';

function App() {
  return (
    <BrowserRouter>
    <div>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" />

      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/donation' element={<Donation />} />
      <Route path='/event' element={<Event />} />
      <Route path='/feature' element={<Feature />} />
      <Route path='/team' element={<Our />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
      <Route path='ulogin' element={<User />} />

      {/* admin */}
      <Route path='/dash' element={<Dash />} />
      <Route path='/pro' element={<Product />} />
      <Route path='/addpro' element={<Addpro />} />
      <Route path='alogin' element={<Alogin />} />

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App