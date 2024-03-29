import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { UserType, IUserState, UpdateUser } from "../@types/users.d";

import { apiFetch } from "../utils/apiFetch";

const initialState: IUserState = {
  users: [],
  user: {} as UserType,
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const token = localStorage.getItem("token");
    const params = {
      option: "users",
      method: "GET",
      token: token,
    };
    const data = await apiFetch(params);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getOneUser = createAsyncThunk(
  "user/getOneUser",
  async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const params = {
        option: "users",
        method: "GET",
        token: token,
        id: id,
      };

      const data = await apiFetch(params);
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
      const token = localStorage.getItem("token");

      const userToString = JSON.stringify(newUser);
      const params = {
        option: "users",
        method: "POST",
        token: token,
        body: userToString,
      };

      const data = await apiFetch(params);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "room/deleteUser",
  async ({ id }: UserType) => {
    const token = localStorage.getItem("token");
    try {
      const params = {
        option: "users",
        method: "DELETE",
        token: token,
        id: id,
      };

      const data = await apiFetch(params);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUsers",
  async ({ body, id }: UpdateUser) => {
    const token = localStorage.getItem("token");
    const userToString = JSON.stringify(body);
    const params = {
      option: "users",
      method: "PUT",
      token: token,
      id: id,
      body: userToString,
    };

    const data = await apiFetch(params);
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
    });

    builder.addCase(getOneUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
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
