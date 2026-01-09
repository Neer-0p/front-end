import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './common/Header'
import Userread from './pages/Userread'
import Useradd from './pages/Useradd'
import Product from './pages/Product'
import Productadd from './pages/Productadd'
import Course from './pages/Course'
import Courseadd from './pages/Courseadd'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/user' element={<Userread/>} />
      <Route path='/create' element={<Useradd/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/productadd' element={<Productadd/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/courseadd' element={<Courseadd/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App