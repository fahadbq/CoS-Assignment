import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../config/axios'


export const loginAsyncUser = createAsyncThunk("user/getAsyncUser", async (formdata) => {

    try {
        const response = await axios.post(`/auth/login`, formdata )
        localStorage.setItem("token", response.data.token)
        console.log(response.data) 
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
})

export const { addUser } = userSlice.actions 
export default userSlice.reducer