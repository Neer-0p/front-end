import React from "react";
// import Design from "./Mdb/Design";
// import Header from "./Router/Commonpages/Header";
// import Footer from "./Router/Commonpages/Footer";
import Home from "./Router/Pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./Router/Pages/About";
import Contact from "./Router/Pages/Contact";
import About1 from "./Router/Pages/About1";
import About2 from "./Router/Pages/About2";
// import Cardcompany from "./UseEffect/Cardcompany";
// import Cardusers from "./UseEffect/Cardusers";
// import Axiospract from "./UseEffect/Axiospract";
// import Axiosphoto from "./UseEffect/Axiosphoto";
// import Fetchuse from "./UseEffect/Fetchuse";
// import Fetchpract from "./UseEffect/Fetchpract";
// import Cardcart from "./UseEffect/Cardcart";
// import Cardaxios from "./UseEffect/Cardaxios";
// import Axioscart from "./UseEffect/Axioscart";
// import Fetchcompany from "./UseEffect/Fetchcompany";
// import Todolist from "./TO-DO-List/Todolist";
// import Form from "./form/Form";
// import Formobj from "./form/Formobj";
// import Pform from "./form/Pform";
// import Fetchdata from "./UseEffect/Fetchdata";
// import Fetchdata2 from "./UseEffect/Fetchdata2";
// import Fetchcart from "./UseEffect/Fetchcart";
// import Fetchusers from "./UseEffect/Fetchusers";
// import Funarray from "./State/Funarray";
// import Statetask from "./task/Statetask";
// import FunState from "./State/FunState";
// import Funobj from "./State/Funobj";
// import ClassProps from "./Props/ClassProps";
// import FunProps from "./Props/FunProps";
// import MainProps from "./Props/MainProps";
// import ClassState from "./State/ClassState";
// import Main from "./Jsx/Main";
// import ClassCompo from "./Component/ClassCompo"
// import FunCompo from "./Component/FunCompo";
// import Axiosuser from "./UseEffect/Axiosuser";
// import Axiosproduct from "./UseEffect/Axiosproduct";

function App() {
  return (

    /* // components */
    /* // <ClassCompo/> */
    /* // <FunCompo/> */
    /* // <Main/> */

    /* // <ClassProps/> */
    /* // <FunProps title={"neer"} desc={"fghffsdgrtgsdf"} img={"https://tse4.mm.bing.net/th/id/OIP.MhvgFKT7phGFm4sMJ-DYdAHaE8?pid=Api&P=0&w=300&h=300"}/> */

    /* // <MainProps/> */
    /* // <ClassState/> */

    /* // <Statetask/> */
    /* // <FunState /> */
    /* // <Funobj /> */
    /* // <Funarray /> */
    /* // <Form /> */
    /* // <Formobj /> */
    /* // <Pform /> */
    /* // <Fetchdata /> */
    /* // <Fetchdata2 /> */
    /* // <Fetchcart /> */
    /* // <Fetchusers /> */
    /* // <Fetchcompany /> */
    /* // <Todolist /> */
    /* // <Axiosuser /> */
    /* // <Axiosproduct /> */
    /* // <Axioscart /> */
    /* // <Cardaxios /> */
    /* // <Cardcart /> */
    // <Cardcompany />
    // <Cardusers />
    // <Axiospract />
    // <Axiosphoto />
    // <Fetchuse />
    // <Fetchpract />
    // <Design />
    // <Header />
    // <Footer />
    // <Home />
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="about1" element={<About1 />} />
        <Route path="about2" element={<About2 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
