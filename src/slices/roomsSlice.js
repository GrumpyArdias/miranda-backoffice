import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  extraReducers: {
    // GET ALL ROOM
    [getAllRooms.fulfilled]: (state, action) => {
      console.log("success");
      state.rooms = action.payload;
    },
    [getAllRooms.pending]: (state) => {
      console.log("Loading...");
    },
    [getAllRooms.rejected]: (state) => {
      console.log("Error fetching Room...");
    },
    // GET ONE ROOM
    [getOneRoom.fulfilled]: (state, action) => {
      console.log("success");
      state.room = state.rooms.find((room) => room.id === action.payload);
    },
    [getOneRoom.pending]: (state) => {
      console.log("Loading...");
    },
    [getOneRoom.rejected]: (state) => {
      console.log("Error Fetching the Room...");
    },

    // CRREATE ONE ROOM
    [createRoom.fulfilled]: (state, action) => {
      console.log("success");
      state.rooms = [...state.romms, action.payload];
    },
    [createRoom.pending]: (state) => {
      console.log("Loading...");
    },
    [createRoom.rejected]: (state) => {
      console.log("Error creating new Room");
    },

    // DELETING ONE ROOM
    [deleteRoom.fulfilled]: (state, action) => {
      console.log("success");
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
    },
    [deleteRoom.pending]: (state) => {
      console.log("Loading...");
    },
    [deleteRoom.rejected]: (state) => {
      console.log("Error Deleting the Room");
    },
    // UPDATING ONE BOOKING
    [updateRoom.fulfilled]: (state, action) => {
      console.log("success");
      state.rooms = state.rooms.map((room) => {
        return room.id === action.payload.id ? action.payload : room;
      });
    },
    [updateRoom.pending]: (state) => {
      console.log("Loading...");
    },
    [updateRoom.rejected]: (state) => {
      console.log("Error updating the Room");
    },
  },
});

export default roomSlice.reducer;
