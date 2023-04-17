import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserArray from "../data/users.json";

const initialState = {
  users: [],
  user: {},
};

function delay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    return await delay(UserArray);
  } catch (error) {
    alert(`Can't get all the Users right now, error: ${error}`);
  }
});

export const getOneUser = createAsyncThunk("user/getOneUser", async (id) => {
  try {
    return await delay(id);
  } catch {
    throw new Error("Failed to fetch the User.");
  }
});

export const createUser = createAsyncThunk(
  "room/createUser",
  async (newUser) => {
    try {
      return await delay({
        ...newUser,
        id: Math.round(Math.random() * 200),
      });
    } catch {
      throw new Error("Failed to create a new User");
    }
  }
);

export const deleteUser = createAsyncThunk("room/deleteUser", async (id) => {
  try {
    return await delay(id);
  } catch {
    throw new Error("Error to delete the User");
  }
});

export const updateUser = createAsyncThunk(
  "room/updateRoom",
  async (updateUser) => {
    try {
      return await delay(...updateUser);
    } catch {
      throw new Error("Error updating the User");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // GET ALL USER
    [getAllUsers.fulfilled]: (state, action) => {
      console.log("success");
      state.users = action.payload;
    },
    [getAllUsers.pending]: (state) => {
      console.log("Loading...");
    },
    [getAllUsers.rejected]: (state) => {
      console.log("Error fetching Room...");
    },
    // GET ONE USERS
    [getOneUser.fulfilled]: (state, action) => {
      console.log("success");
      state.user = state.users.find((user) => user.id === action.payload);
    },
    [getOneUser.pending]: (state) => {
      console.log("Loading...");
    },
    [getOneUser.rejected]: (state) => {
      console.log("Error Fetching the User...");
    },

    // CRREATE ONE USER
    [createUser.fulfilled]: (state, action) => {
      console.log("success");
      state.users = [...state.users, action.payload];
    },
    [createUser.pending]: (state) => {
      console.log("Loading...");
    },
    [createUser.rejected]: (state) => {
      console.log("Error creating new User");
    },

    // DELETING ONE USER
    [deleteUser.fulfilled]: (state, action) => {
      console.log("success");
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    [deleteUser.pending]: (state) => {
      console.log("Loading...");
    },
    [deleteUser.rejected]: (state) => {
      console.log("Error Deleting the User");
    },
    // UPDATING ONE USER
    [updateUser.fulfilled]: (state, action) => {
      console.log("success");
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
    },
    [updateUser.pending]: (state) => {
      console.log("Loading...");
    },
    [updateUser.rejected]: (state) => {
      console.log("Error updating the User");
    },
  },
});

export default userSlice.reducer;
