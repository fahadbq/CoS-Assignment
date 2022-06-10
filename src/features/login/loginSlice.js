import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    data: []
}

const userSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addUser (state, action) {
            state.data = action.payload
        }
    }
})

export const { addUser } = userSlice.actions 
export default userSlice.reducer