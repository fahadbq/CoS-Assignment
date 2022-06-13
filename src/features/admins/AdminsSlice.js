import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../config/axios'

export const getAsyncAdmins = createAsyncThunk("admins/getAsyncAdmins", async () => {
    
    try {
        const response = await axios.get("/admins", {
            headers: {
                Authorization: localStorage.getItem("token")
            } 
        })
        return response.data
    }
    catch (error) {
        console.log(error.message)
    }
})

const initialState = {
    loading: true,
    data: []
}

const adminsSlice = createSlice({
    name: "admins",
    initialState,
    extraReducers: {
        [getAsyncAdmins.pending]: (state) => {
            console.log("pending")
            return { ...state, loading: true}
        },
        [getAsyncAdmins.fulfilled]: (state, action) => {
            console.log("fulfilled")
            return {...state, data: action.payload, loading: false }
        },
        [getAsyncAdmins.rejected]: (state) => {
            console.log("rejected")
            return { ...state, loading: true}
        }
    } 
})

export const getAllAdmins = (state) => state.admins

export default adminsSlice.reducer

//figure out how to read data from the accounts and make a list of account data 