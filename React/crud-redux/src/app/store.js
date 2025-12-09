import { configureStore } from "@reduxjs/toolkit";
import Userslice  from "../slice/Userslice";
import Productslice  from "../slice/Productslice";
import  Courseslice  from "../slice/Courseslice";

export default configureStore({
    reducer :{
        user : Userslice,
        product : Productslice,
        course : Courseslice
    }
})