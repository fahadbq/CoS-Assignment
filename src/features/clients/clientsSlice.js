import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const asyncAllClients = createAsyncThunk(
  "clients/asyncAllClients",
  async (page) => {
    try {
      const response = await axios.get(
        `/clients?page=${page ? page : 0}&limit=10`
      );
      console.log(page);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("getClient Error", error);
    }
  }
);

export const asyncGetClient = createAsyncThunk(
  "clients/asyncGetClient",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/clients/${id}`);
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
      const response = await axios.post("/clients", clientFormData);
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
      await axios.delete(`/clients/${id}`);
      navigate("/clients");
      return Number(id);
    } catch (error) {
      alert("DeleteClient Error", error.message);
    }
  }
);

export const asyncUpdateClient = createAsyncThunk(
  "clients/asyncUpdateClient",
  async ({ clientFormData, navigate }, { rejectWithValue }) => {
    try {
      await axios.put(`/clients/${clientFormData.id}`, clientFormData);
      console.log(clientFormData);
      navigate("/clients");
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
  hasNext: true,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = [];
    },
  },
  extraReducers: {
    [asyncAllClients.fulfilled]: (state, action) => {
      if (action.payload && action.payload.data.length > 1) {
        // state.data = [...state.data, ...action.payload.data];
        state.data = state.data.concat(action.payload.data);
      }
      if (action.payload) {
        state.hasNext = action.payload.meta.pagination.hasNext;
      }
    },
    [asyncAllClients.rejected]: (state) => {
      state.loading = true;
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
      state.loading = true;
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
      state.oneData = action.payload;
    },
    [asyncUpdateClient.rejected]: (state) => {
      console.log("rejected");
      state.loading = true;
    },
  },
});

export const getAllClients = (state) => state.clients;

export const { resetData } = clientsSlice.actions;

export default clientsSlice.reducer;
