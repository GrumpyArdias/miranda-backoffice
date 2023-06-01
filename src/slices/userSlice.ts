import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { UserType, IUserState, UpdateUser } from "../@types/users.d";
import { v4 as uuid } from "uuid";
import { apiFetch } from "../utils/apiFetch";

const initialState: IUserState = {
  users: [],
  user: {} as UserType,
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const token = localStorage.getItem("token");
    const data = await apiFetch("users", "GET", token);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getOneUser = createAsyncThunk(
  "user/getOneUser",
  async ({ id }: UserType) => {
    try {
      const token = localStorage.getItem("token");
      const data = await apiFetch("users", "GET", token, id);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const createUser = createAsyncThunk(
  "room/createUser",
  async (newUser: UserType) => {
    try {
      const id = uuid();
      const token = localStorage.getItem("token");
      newUser.id = id;
      const userToString = JSON.stringify(newUser);
      const data = await apiFetch("users", "POST", token, id, userToString);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "room/deleteUser",
  async ({ id }: UserType) => {
    try {
      const token = localStorage.getItem("token");
      const data = await apiFetch("users", "DELETE", token, id);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "room/updateRoom",
  async ({ body, id }: UpdateUser) => {
    const token = localStorage.getItem("token");
    const userToString = JSON.stringify(body);
    const data = await apiFetch("users", "PUT", token, id, userToString);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      console.log("getAllUsers.fulfilled", state.users);
    });

    builder.addCase(getOneUser.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.user = state.users.find((user) => user.id === id);
      console.log("getOneUser.fulfilled", state.user);
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
      console.log("createUser.fulfilled", state.users);
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      console.log("deleteUser.fulfilled", state.users);
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      console.log("updateUser.fulfilled", state.users);
    });

    builder.addMatcher(
      isAnyOf(
        getAllUsers.pending,
        getOneUser.pending,
        createUser.pending,
        deleteUser.pending,
        updateUser.pending
      ),
      (state) => {
        console.log("Loading...");
      }
    );

    builder.addMatcher(
      isAnyOf(
        getAllUsers.rejected,
        getOneUser.rejected,
        createUser.rejected,
        deleteUser.rejected,
        updateUser.rejected
      ),
      (state, action) => {
        console.log("Error action type:", action.type);
      }
    );
  },
});

export default userSlice.reducer;
