import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const loginAsyncUser = createAsyncThunk(
  "user/loginAsyncUser",
  async ({ loginFormData, onSubmitProps, handleAuth, pushAccPath }) => {
    try {
      const response = await axios.post(`/auth/login`, loginFormData);
      localStorage.setItem("token", response.data.token);
      onSubmitProps.resetForm();
      pushAccPath();
      handleAuth(true);
    } catch (error) {
      alert("Login error", error.message);
    }
  }
);

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
