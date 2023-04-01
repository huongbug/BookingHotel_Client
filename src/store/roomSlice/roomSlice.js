import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RoomService from "../../services/room.service";
// import { userAPI } from "./userAPI";

const roomService = new RoomService();

// First, create the thunk
export const fetchGetRooms = createAsyncThunk("/rooms", async (thunkAPI) => {
  const response = await roomService.getRooms();
  return response.data;
});

export const fetchGetAvailableRooms = createAsyncThunk(
  "/rooms",
  async (thunkAPI) => {
    const response = await roomService.getAvailableRooms();
    return response.data;
  }
);

export const fetchGetRoom = createAsyncThunk(
  "room",
  async (roomId, thunkAPI) => {
    const response = await roomService.getRoomById(roomId);
    return response.data;
  }
);

export const fetchCreateRoom = createAsyncThunk(
  "room",
  async (createRoomDto, thunkAPI) => {
    const response = await roomService.createRoom(createRoomDto);
    return response.data;
  }
);

export const fetchUpdateRoom = createAsyncThunk(
  "room",
  async (roomId, updateRoomDto, thunkAPI) => {
    const response = await roomService.updateRoomById(roomId, updateRoomDto);
    return response.data;
  }
);

const initialState = {
  entities: [],
  loading: "idle",
};

// Then, handle actions in your reducers:
const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
});

export default roomSlice.reducer;
