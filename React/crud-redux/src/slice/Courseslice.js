import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read
export const showdata = createAsyncThunk(
    "showdata", async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/course")
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// add
export const addcourse = createAsyncThunk(
    "addcourse", async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post(`http://localhost:3000/course`,data)
            const resp =await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// delete
export const deletecourse = createAsyncThunk(
    "deletecourse",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/course/${data}`)
            const result =await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const Courseslice = createSlice({
    name : "data",
    initialState : {
        pending : true,
        courses : [],
        reject : ""
    },
    reducers : {
        Coursepending:(state,action)=>{
            state.loading = true
            state.error = ""
        },
        Coursefullfilled:(state,action)=>{
            state.loading = false
            state.courses.push(action.payload)
        },
        Coursereject:(state,action)=>{
            state.reject = false
            state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder

        // read
        .addCase(showdata.pending,(state,action)=>{
            state.loading = false
        })
        .addCase(showdata.fulfilled,(state,action)=>{
            state.loading = false
            state.courses = action.payload
        })
        .addCase(showdata.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })

        // delete
        .addCase(deletecourse.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(deletecourse.fulfilled,(state,action)=>{
            state.loading = false
            state.courses = state.courses.filter((data,index)=>index != action.payload)
        })
        .addCase(deletecourse.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export const {Coursepending,Coursefullfilled,Coursereject} = Courseslice.actions
export default Courseslice.reducer