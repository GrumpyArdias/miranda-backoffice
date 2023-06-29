import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { RoomType, UpdateRoom, IRoomsState } from "../@types/rooms";
import { apiFetch } from "../utils/apiFetch";
import { param } from "cypress/types/jquery";

const initialState: IRoomsState = {
  rooms: [],
  room: {} as RoomType,
};

export const getAllRooms = createAsyncThunk("rooms/getAllrooms", async () => {
  try {
    const token = localStorage.getItem("token");
    const params = {
      option: "rooms",
      method: "GET",
      token: token,
    };
    const data = await apiFetch(params);

    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getOneRoom = createAsyncThunk(
  "room/getOneBook",
  async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const params = {
        option: "rooms",
        method: "GET",
        token: token,
        id: id,
      };

      const data = await apiFetch(params);
      console.log("this is data in the roomSlice", data);
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
      const roomToString = JSON.stringify(newRoom);
      const params = {
        option: "rooms",
        method: "POST",
        token: token,
        body: roomToString,
      };
      const data = await apiFetch(params);
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
      const params = {
        option: "rooms",
        method: "DELETE",
        token: token,
        id: id,
      };
      const data = await apiFetch(params);
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
      const params = {
        option: "rooms",
        method: "DELETE",
        token: token,
        id: id,
        body: roomsToStrings,
      };
      const data = await apiFetch(params);
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
        console.log("This is the action payload in RoomSlice", action.payload);
        state.room = action.payload;
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
