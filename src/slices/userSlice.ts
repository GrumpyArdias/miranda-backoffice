import {
  createAsyncThunk,
  createSlice,
  isAllOf,
  isAnyOf,
} from "@reduxjs/toolkit";
import UserArray from "../data/users.json";
import { UserType, IUserState, UpdateUser } from "../@types/users.d";
import { v4 as uuid } from "uuid";

const initialState: IUserState = {
  users: [],
  user: {} as UserType,
};

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const data: UserType[] = await new Promise<UserType[]>((resolve) => {
      setTimeout(() => {
        return resolve(UserArray);
      }, 200);
    });
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getOneUser = createAsyncThunk(
  "user/getOneUser",
  async ({ id }: UserType) => {
    try {
      const data = await new Promise<UserType>((resolve) => {
        setTimeout(() => {
          resolve(UserArray.find((user) => user.id === id));
        }, 200);
      });
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
      const data = await new Promise<UserType>((resolve) => {
        setTimeout(() => {
          resolve({ ...newUser, id });
        }, 200);
      });
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
      const data = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(id);
        }, 200);
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "room/updateRoom",
  async ({ body, id }: UpdateUser) => {
    const data = await new Promise<UserType>((resolve) => {
      setTimeout(() => {
        resolve({ ...body, id });
      }, 200);
    });
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
