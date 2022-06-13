import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../config/axios'
import { getAsyncAdmins } from '../admins/AdminsSlice'

export const loginAsyncUser = createAsyncThunk("user/loginAsyncUser", async ({ values, resetForm, handleAuth, pushAccPath, dispatch } ) => { // Login path

    console.log(handleAuth, pushAccPath)

    try {
        const response = await axios.post(`/auth/login`, values)
        localStorage.setItem("token", response.data.token)
        resetForm({ values: "" }) 
        pushAccPath()
        handleAuth(true)
        dispatch(getAsyncAdmins())
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
})

export default userSlice.reducer