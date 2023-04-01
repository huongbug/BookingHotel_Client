import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import SaleService from "../../services/sale.service";
// import { userAPI } from "./userAPI";

const saleService = new SaleService();

// First, create the thunk
export const fetchGetSales = createAsyncThunk("/sales", async (thunkAPI) => {
  const response = await saleService.getSales();
  return response.data;
});

export const fetchGetAvailableSales = createAsyncThunk(
  "/sales",
  async (thunkAPI) => {
    const response = await saleService.getAvailableSales();
    return response.data;
  }
);

export const fetchGetSale = createAsyncThunk(
  "sale",
  async (saleId, thunkAPI) => {
    const response = await saleService.getSaleById(saleId);
    return response.data;
  }
);

const initialState = {
  entities: [],
  loading: "idle",
};

// Then, handle actions in your reducers:
const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {},
});

export default saleSlice.reducer;
