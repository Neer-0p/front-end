import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// readdata
export const readdata = createAsyncThunk(
    "readdata", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/user")
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// add
export const adduser = createAsyncThunk(
    "adduser", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/user", data)
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// delete
export const deleteuser = createAsyncThunk(
    "deleteuser", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/user/${data}`)
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const Userslice = createSlice({
    name: "details",
    initialState: {
        loading: true,
        users: [],
        error: ""
    },
    reducers: {
        Userpending: (state, action) => {
            state.loading = true
            state.error = ""
        },
        Userfulfilled: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        Userreject: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder

            // read
            .addCase(readdata.pending, (state, action) => {
                state.loading = true
            })
            .addCase(readdata.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(readdata.rejected, (state, action) => {
                state.loading = false
                state.users = action.payload
            })

            // delete
            .addCase(deleteuser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteuser.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.filter((data, index) => data.id != action.payload)
            })
            .addCase(deleteuser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { Userpending, Userfulfilled, Userreject } = Userslice.actions
export default Userslice.reducer