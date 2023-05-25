import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { RoomType, UpdateRoom, IRoomsState } from "../@types/rooms";
import { apiFetch } from "../utils/apiFetch";

const initialState: IRoomsState = {
  rooms: [],
  room: {} as RoomType,
};

export const getAllRooms = createAsyncThunk("rooms/getAllrooms", async () => {
  try {
    const token = localStorage.getItem("token");
    const data = await apiFetch("rooms", "GET", token);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getOneRoom = createAsyncThunk(
  "room/getOneBook",
  async ({ id }: RoomType) => {
    try {
      const token = localStorage.getItem("token");
      const data = await apiFetch("rooms", "GET", token, id);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const createRoom = createAsyncThunk(
  "room/createRoom",
  async (newRoom: RoomType) => {
    try {
      const token = localStorage.getItem("token");
      const id = uuid();
      newRoom.id = id;
      const roomToString = JSON.stringify(newRoom);
      const data = await apiFetch("rooms", "POST", token, roomToString);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteRoom = createAsyncThunk(
  "room/deleteRoom",
  async ({ id }: RoomType) => {
    try {
      const token = localStorage.getItem("token");
      const data = await apiFetch("rooms", "DELETE", token, id);
      console.log(data);
      return id;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateRoom = createAsyncThunk(
  "room/updateRoom",
  async ({ body, id }: UpdateRoom) => {
    try {
      const token = localStorage.getItem("token");
      const roomsToStrings = JSON.stringify(body);
      const data = await apiFetch("rooms", "PUT", token, id, roomsToStrings);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
        console.log("getAllRooms.fulfilled", state.rooms);
      })
      .addCase(getOneRoom.fulfilled, (state, action) => {
        state.room = state.rooms.find((room) => room.id === action.payload.id);
        console.log("getOneRoom.fulfilled", state.room);
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.rooms = [...state.rooms, action.payload];
        console.log("createRoom.fulfilled", state.rooms);
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        const id = action.payload;
        state.rooms = state.rooms.filter((room) => room.id !== id);
        console.log("deleteRoom.fulfilled", state.rooms);
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.rooms = state.rooms.map((room) =>
          room.id === action.payload.id ? action.payload : room
        );
        console.log("updateRoom.fulfilled", state.rooms);
      })

      .addMatcher(
        isAnyOf(
          getAllRooms.pending,
          getOneRoom.pending,
          createRoom.pending,
          deleteRoom.pending,
          updateRoom.pending
        ),
        (state) => {
          console.log("Loading...");
        }
      )

      .addMatcher(
        isAnyOf(
          getAllRooms.rejected,
          getOneRoom.rejected,
          createRoom.rejected,
          deleteRoom.rejected,
          updateRoom.rejected
        ),
        (state, action) => {
          console.log("Error action type:", action.type);
        }
      );
  },
});

export default roomSlice.reducer;
