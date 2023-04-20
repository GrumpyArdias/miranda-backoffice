import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import RoomArray from "../data/rooms.json";

const initialState = {
  rooms: [],
  room: {},
};

function delay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}

export const getAllRooms = createAsyncThunk("rooms/getAllrooms", async () => {
  try {
    return await delay(RoomArray);
  } catch (error) {
    alert(`Can't get all the rooms right now, error: ${error}`);
  }
});

export const getOneRoom = createAsyncThunk("room/getOneBook", async (id) => {
  try {
    return await delay(id);
  } catch {
    throw new Error("Failed to fetch the room.");
  }
});

export const createRoom = createAsyncThunk(
  "room/createRoom",
  async (newRoom) => {
    try {
      return await delay({
        ...newRoom,
        id: Math.round(Math.random() * 200),
      });
    } catch {
      throw new Error("Failed to create a new Room");
    }
  }
);

export const deleteRoom = createAsyncThunk("room/deleteRoom", async (id) => {
  try {
    return await delay(id);
  } catch {
    throw new Error("Error to delete the Room");
  }
});

export const updateRoom = createAsyncThunk(
  "room/updateRoom",
  async (updateRoom) => {
    try {
      return await delay(...updateRoom);
    } catch {
      throw new Error("Error updating the booking");
    }
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        getAllRooms.fulfilled,
        getOneRoom.fulfilled,
        createRoom.fulfilled,
        deleteRoom.fulfilled,
        updateRoom.fulfilled
      ),
      (state, action) => {
        switch (action.type) {
          case getAllRooms.fulfilled.type:
            state.rooms = action.payload;
            console.log("getAllRooms.fulfilled", state.rooms);
            break;

          case getOneRoom.fulfilled.type:
            state.room = state.rooms.find(
              (room) => room.id === action.payload.id
            );
            console.log("getOneRoom.fulfilled", state.room);
            break;

          case createRoom.fulfilled.type:
            state.rooms = [...state.rooms, action.payload];
            console.log("createRoom.fulfilled", state.rooms);
            break;

          case deleteRoom.fulfilled.type:
            state.rooms = state.rooms.filter(
              (room) => room.id !== action.payload
            );
            console.log("deleteRoom.fulfilled", state.rooms);
            break;

          case updateRoom.fulfilled.type:
            state.rooms = state.rooms.map((room) =>
              room.id === action.payload.id ? action.payload : room
            );
            console.log("updateRoom.fulfilled", state.rooms);
            break;

          default:
            break;
        }
      }
    );
  },
});

export default roomSlice.reducer;
