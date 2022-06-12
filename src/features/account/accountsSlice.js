import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../config/axios'

export const getAsyncUser = createAsyncThunk("accounts/getAsyncUser", async () => {
    
    try {
        const response = await axios.get("/admins", {
            headers: {
                Authentication: localStorage.getItem("token")
            } 
        })
        console.log("get admin details", response.data)
        return response.data
    }
    catch (error) {
        console.log(error.message)
    }
})

const initialState = {
    data: []
}

const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {
        getAccount: (state, {payload}) => {
            state.data.push(payload)
        }
    },
    extraReducers: {
        [getAsyncUser.pending]: () => {
            console.log("pending")
        },
        [getAsyncUser.fulfilled]: (state, action) => {
            console.log("fulfilled")
            return {...state, data: action.payload }
        },
        [getAsyncUser.rejected]: () => {
            console.log("rejected")
        }
    } 
})

export const { getAccount } = accountsSlice.actions 

export default accountsSlice.reducer

//figure out how to read data from the accounts and make a list of account data 