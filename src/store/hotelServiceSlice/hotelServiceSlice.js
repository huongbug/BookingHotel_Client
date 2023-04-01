import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import HotelServiceService from "../../services/hotel-service.service";

// import { userAPI } from "./userAPI";

const hotelService = new HotelServiceService();

export const fetchGetHotelServices = createAsyncThunk(
  "/hotels",
  async (thunkAPI) => {
    const response = await hotelService.getServices();
    return response.data;
  }
);

export const fetchGetHotelService = createAsyncThunk(
  "/hotels",
  async (serviceId, thunkAPI) => {
    const response = await hotelService.getServiceById(serviceId);
    return response.data;
  }
);

export const fetchUpdateHotelService = createAsyncThunk(
  "/hotels",
  async (serviceId, thunkAPI) => {
    const response = await hotelService.updateServiceById(serviceId);
    return response.data;
  }
);

export const fetchCreateHotelServices = createAsyncThunk(
  "/hotels",
  async (serviceCreateDto, thunkAPI) => {
    const response = await hotelService.createService(serviceCreateDto);
    return response.data;
  }
);

const initialState = {
  entities: [],
  loading: "idle",
};

// Then, handle actions in your reducers:
const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchLogin.fulfilled, (state, action) => {
  //       state.entities.push(action.payload);
  //     });
  //   },
});

export default hotelSlice.reducer;
