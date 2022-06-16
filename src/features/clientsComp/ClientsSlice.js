import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const asyncGetClients = createAsyncThunk(
  "clients/asyncGetClients",
  async () => {
    try {
      const response = await axios.get("/clients", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      alert("getClient Error", error.message);
    }
  }
);

export const asyncGetClient = createAsyncThunk(
  "clients/asyncGetClient",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/clients/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const asyncCreateClient = createAsyncThunk(
  "clients/asyncCreateClient",
  async ({ clientFormData, onSubmitProps }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/clients", clientFormData, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
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

export const asyncDeleteClient = createAsyncThunk(
  "clients/asyncDeleteClient",
  async ({ id, navigate }) => {
    try {
      await axios.delete(`/clients/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      navigate("/clients");
      return id;
    } catch (error) {
      alert("DeleteClient Error", error.message);
    }
  }
);

export const asyncUpdateClient = createAsyncThunk(
  "clients/asyncUpdateClient",
  async ({ clientFormData, onSubmitProps }, { rejectWithValue }) => {
    try {
      await axios.put(`/clients/${clientFormData.id}`, clientFormData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(clientFormData);
      onSubmitProps.resetForm();
      return clientFormData;
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
  oneData: {},
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  extraReducers: {
    [asyncGetClients.fulfilled]: (state, action) => {
      return { ...state, data: action.payload.data, loading: false };
    },
    [asyncGetClients.rejected]: (state, action) => {
      return { ...state, loading: true, status: action.payload };
    },

    //Get an Client by id
    [asyncGetClient.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.oneData = action.payload;
    },
    [asyncGetClient.rejected]: (state, action) => {
      state.errors = action.payload.message;
      alert(action.payload.message);
    },

    // Create Client
    [asyncCreateClient.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.data = [action.payload, ...state.data];
      state.loading = false;
    },
    [asyncCreateClient.rejected]: (state, action) => {
      state.errors = action.payload.message;
      alert(action.payload.message);
    },

    //Delete Client
    [asyncDeleteClient.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = state.data.filter((ele) => ele.id !== action.payload);
    },
    [asyncDeleteClient.rejected]: (state) => {
      console.log("rejected");
      return { ...state, loading: true };
    },

    //Update Client
    [asyncUpdateClient.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = state.data.map((ele) => {
        if (ele.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return { ...ele };
        }
      });
    },
    [asyncUpdateClient.rejected]: (state) => {
      console.log("rejected");
      return { ...state, loading: true };
    },
  },
});

export const getAllClients = (state) => state.clients;

export default clientsSlice.reducer;
