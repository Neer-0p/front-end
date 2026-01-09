import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Service from './Website/Pages/Service'
import Blog from './Website/Pages/Blog'
import Blogd from './Website/Pages/Blogd'
import Price from './Website/Pages/Price'
import Feature from './Website/Pages/Feature'
import Team from './Website/Pages/Team'
import Testinomial from './Website/Pages/Testinomial'
import Quota from './Website/Pages/Quota'
import Contact from './Website/Pages/Contact'
import Dashboard from './Admin/Apages/Dashboard'
import Course from './Admin/Apages/Course'
import Mservice from './Admin/Apages/Mservice'
import Mprice from './Admin/Apages/Mprice'
import Mteam from './Admin/Apages/Mteam'
import CourseAdd from './Admin/Apages/CourseAdd'
import TeamAdd from './Admin/Apages/TeamAdd'
import ServiceAdd from './Admin/Apages/ServiceAdd'
import PriceAdd from './Admin/Apages/PriceAdd'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alogin from './Admin/Apages/Alogin'
import Login from './Website/Pages/Login'
import Ulogin from './Website/Pages/Ulogin'
import Edit from './Website/Pages/Edit'
import Table from './Usertable/table'
import Aedit from './Admin/Apages/Aedit'

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
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogd' element={<Blogd />} />
          <Route path='/price' element={<Price />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testimonial' element={<Testinomial />} />
          <Route path='/quota' element={<Quota />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ulogin' element={<Ulogin />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/utable' element={<Table />} />
      

          {/* admin */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/course' element={<Course />} />
          <Route path='/mservice' element={<Mservice />} />
          <Route path='/mprice' element={<Mprice />} />
          <Route path='/mteam' element={<Mteam />} />
          <Route path='/courseadd' element={<CourseAdd />} />
          <Route path='/teamadd' element={<TeamAdd />} />
          <Route path='/serviceadd' element={<ServiceAdd />} />
          <Route path='/priceadd' element={<PriceAdd />} />
          <Route path='/alogin' element={<Alogin />} />
          <Route path='/aedit' element={<Aedit />} />
        </Routes>
</div>
    </BrowserRouter>
  )
}

export default App