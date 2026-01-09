import { configureStore } from "@reduxjs/toolkit";
import  Productslice  from "../slice/Productslice";

export default configureStore({
    reducer :{
        product : Productslice
    }
})