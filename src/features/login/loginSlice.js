import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../config/axios'


export const getAsyncUser = createAsyncThunk("user/getAsyncUser", async (formdata) => {

    console.log("we made it", formdata)
    try {
        const response = await axios.post(`/auth/login`, formdata )
        localStorage.setItem("token", response.data.token)
        console.log(response.data) // navigate to admin and make client component as well.
    } 
    catch (error) {
        console.log(error.message)
    }
})

const initialState = {
    data: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser (state, action) {
            state.data = action.payload
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

export const { addUser } = userSlice.actions 
export default userSlice.reducer