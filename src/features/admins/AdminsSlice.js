import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const getAsyncAdmins = createAsyncThunk(
  "admins/getAsyncAdmins",
  async (page) => {
    try {
      const response = await axios.get(
        `/admins?page=${page ? page : 0}&limit=10`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      alert("getAdmins Error", error.message);
    }
  }
);

export const asyncGetAdmin = createAsyncThunk(
  "admins/asyncGetAdmin",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/admins/${id}`);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createAsyncAdmin = createAsyncThunk(
  "admins/createAsyncAdmin",
  async ({ adminFormData, onSubmitProps }, { rejectWithValue }) => {
    console.log("reading form in asyn operation", adminFormData);
    try {
      const response = await axios.post("/admins", adminFormData);
      onSubmitProps.resetForm();
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteAsyncAdmin = createAsyncThunk(
  "admins/deleteAsyncAdmins",
  async ({ id, navigate }) => {
    try {
      await axios.delete(`/admins/${id}`);
      navigate("/admins");
      return Number(id);
    } catch (error) {
      alert("DeleteAdmin Error", error.message);
    }
  }
);

export const asyncUpdateAdmin = createAsyncThunk(
  "admins/asyncUpdateAdmin",
  async ({ adminFormData, navigate }, { rejectWithValue }) => {
    try {
      await axios.put(`/admins/${adminFormData.id}`, adminFormData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(adminFormData);
      navigate("/admins");
      return adminFormData;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  loading: true,
  data: [],
  errors: "",
  oneData: {}, // create another slice for a single amdmin details
  hasNext: true,
};

const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncAdmins.fulfilled]: (state, action) => {
      if (action.payload.data.length > 1) {
        state.data = [...action.payload.data, ...state.data];
        state.loading = false;
      }
      state.hasNext = action.payload.meta.pagination.hasNext;
    },
    [getAsyncAdmins.rejected]: (state, action) => {
      state.loading = true;
    },

    //Get an Admin by id
    [asyncGetAdmin.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.oneData = action.payload;
    },
    [asyncGetAdmin.rejected]: (state, action) => {
      state.errors = action.payload.message;
      alert(action.payload.message);
    },

    // Create Admin
    [createAsyncAdmin.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.data = [action.payload, ...state.data];
      state.loading = false;
    },
    [createAsyncAdmin.rejected]: (state, action) => {
      state.errors = action.payload.message;
      alert(action.payload.message);
    },

    //Delete Admin
    [deleteAsyncAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = state.data.filter((ele) => ele.id !== action.payload);
    },
    [deleteAsyncAdmin.rejected]: (state) => {
      console.log("rejected");
      return { ...state, loading: true };
    },

    //Update Admin
    [asyncUpdateAdmin.fulfilled]: (state, action) => {
      state.data = state.data.map((ele) => {
        if (ele.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return { ...ele };
        }
      });
      state.loading = false;
    },
    [asyncUpdateAdmin.rejected]: (state, action) => {
      state.errors = action.payload.message;
      alert(action.payload.message);
    },
  },
});

export const getAllAdmins = (state) => state.admins;

export default adminsSlice.reducer;
