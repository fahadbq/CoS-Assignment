import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const asyncAllAdmins = createAsyncThunk(
  "admins/asyncAllAdmins",
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

export const asyncCreateAdmin = createAsyncThunk(
  "admins/asyncCreateAdmin",
  async ({ adminFormData, onSubmitProps }, { rejectWithValue }) => {
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

export const asyncDeleteAdmin = createAsyncThunk(
  "admins/asyncDeleteAdmin",
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
  oneData: {}, // create another slice for a single admin details
  hasNext: true,
};

const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = [];
    },
  },
  extraReducers: {
    [asyncAllAdmins.fulfilled]: (state, action) => {
      if (action.payload && action.payload.data.length > 1) {
        state.data = [...state.data, ...action.payload.data];
        state.loading = false;
      }
      if (action.payload)
        state.hasNext = action.payload.meta.pagination.hasNext;
    },
    [asyncAllAdmins.rejected]: (state) => {
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
    [asyncCreateAdmin.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.data = [action.payload, ...state.data];
      state.loading = false;
    },
    [asyncCreateAdmin.rejected]: (state, action) => {
      state.errors = action.payload.message;
      alert(action.payload.message);
    },

    //Delete Admin
    [asyncDeleteAdmin.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = state.data.filter((ele) => ele.id !== action.payload);
    },
    [asyncDeleteAdmin.rejected]: (state) => {
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

export const { resetData } = adminsSlice.actions;

export default adminsSlice.reducer;
