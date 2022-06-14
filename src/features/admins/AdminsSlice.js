import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const getAsyncAdmins = createAsyncThunk(
  "admins/getAsyncAdmins",
  async () => {
    try {
      const response = await axios.get("/admins", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (error) {
      alert("getAdmins Error", error.message);
    }
  }
);

export const createAsyncAdmin = createAsyncThunk(
  "admins/createAsyncAdmin",
  async ({ adminFormData, resetForm }) => {
    try {
      const response = await axios.post("/admins", adminFormData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  loading: true,
  data: [],
  status: null,
};

const adminsSlice = createSlice({
  name: "admins",
  initialState,
  extraReducers: {
    [getAsyncAdmins.pending]: (state) => {
      return { ...state, loading: true };
    },
    [getAsyncAdmins.fulfilled]: (state, action) => {
      return { ...state, data: action.payload, loading: false };
    },
    [getAsyncAdmins.rejected]: (state, action) => {
      return { ...state, loading: true, status: action.payload };
    },

    // Create Admin
    [createAsyncAdmin.pending]: (state) => {
      console.log("pending");
      return { ...state, loading: true };
    },
    [createAsyncAdmin.fulfilled]: (state, action) => {
      console.log("fulfilled");
      return { ...state, data: action.payload, loading: false };
    },
    [createAsyncAdmin.rejected]: (state, action) => {
      console.log("rejected");
      return { ...state, loading: true, stauts: action.payload };
    },
  },
});

export const getAllAdmins = (state) => state.admins;

export default adminsSlice.reducer;

//figure out how to read data from the accounts and make a list of account data
