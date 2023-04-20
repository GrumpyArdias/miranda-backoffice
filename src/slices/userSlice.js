import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
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
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        getAllUsers.fulfilled,
        getOneUser.fulfilled,
        createUser.fulfilled,
        deleteUser.fulfilled,
        updateUser.fulfilled
      ),
      (state, action) => {
        switch (action.type) {
          case getAllUsers.fulfilled.type:
            state.users = action.payload;
            console.log("getAllUsers.fulfilled", state.users);
            break;

          case getOneUser.fulfilled.type:
            state.user = state.users.find(
              (user) => user.id === action.payload.id
            );
            console.log("getOneUser.fulfilled", state.user);
            break;

          case createUser.fulfilled.type:
            state.users = [...state.users, action.payload];
            console.log("createUser.fulfilled", state.users);
            break;

          case deleteUser.fulfilled.type:
            state.users = state.users.filter(
              (user) => user.id !== action.payload
            );
            console.log("deleteUser.fulfilled", state.users);
            break;

          case updateUser.fulfilled.type:
            state.users = state.users.map((user) =>
              user.id === action.payload.id ? action.payload : user
            );
            console.log("updateUser.fulfilled", state.users);
            break;

          default:
            break;
        }
      }
    );
  },
});

export default userSlice.reducer;
