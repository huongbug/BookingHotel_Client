import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";

const userService = new UserService();

const initialState = {
  value: {},
};

export const fetchGetUsers = createAsyncThunk("/user", async (thunkAPI) => {
  const response = await userService.getUsers();
  return response.data;
});

export const fetchGetUser = createAsyncThunk(
  "/user",
  async (userId, thunkAPI) => {
    const response = await userService.getUserById(userId);
    return response.data;
  }
);

export const fetchUpdateUser = createAsyncThunk(
  "/user",
  async ({ userId, updateUserDto }, thunkAPI) => {
    const response = await userService.updateUserById(userId, updateUserDto);
    return response.data;
  }
);

export const fetchGetCurrentUser = createAsyncThunk(
  "/user",
  async (thunkAPI) => {
    const response = await userService.getCurrentUser();
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { setuser } = userSlice.actions;

export default userSlice.reducer;
