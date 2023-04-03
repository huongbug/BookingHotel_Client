import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ProductService from "../../services/product.service";
// import { userAPI } from "./userAPI";

const productService = new ProductService();

// First, create the thunk
export const fetchGetProducts = createAsyncThunk(
  "/products",
  async (thunkAPI) => {
    try {
      const response = await productService.getProducts();
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const fetchGetProduct = createAsyncThunk(
  "/products",
  async (productId, thunkAPI) => {
    try {
      const response = await productService.getProductById(productId);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const fetchCreateProduct = createAsyncThunk(
  "product",
  async (creatProductDto, thunkAPI) => {
    try {
      const response = await productService.createProduct(creatProductDto);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const fetchDeleteProduct = createAsyncThunk(
  "sale",
  async (productId, thunkAPI) => {
    const response = await productService.deleteProductById(productId);
    return response.data;
  }
);

const initialState = {
  entities: [],
  loading: "idle",
};

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
