import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// readdata
export const prodata = createAsyncThunk(
    "prodata", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/product")
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// addproduct
export const proadd = createAsyncThunk(
    "proadd", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post(`http://localhost:3000/product`, data)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    })

// delete
export const deletepro = createAsyncThunk(
    "deletepro", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/product/${data}`)
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const Productslice = createSlice({
    name: "data",
    initialState: {
        pending: true,
        products: [],
        error: ""
    },
    reducers: {
        Productpending: (state, action) => {
            state.loading = true,
                state.error = ""
        },
        Productfulfilled: (state, action) => {
            state.loading = false,
                state.products.push(action.payload)
        },
        Productreject: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder

            // read
            .addCase(prodata.pending, (state, action) => {
                state.loading = true
            })
            .addCase(prodata.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(prodata.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // delete
            .addCase(deletepro.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deletepro.fulfilled, (state, action) => {
                state.loading = false
                state.products = state.products.filter((data, index) => index != action.payload)
            })
            .addCase(deletepro.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { Productpending, Productfulfilled, Productreject } = Productslice.actions
export default Productslice.reducer
