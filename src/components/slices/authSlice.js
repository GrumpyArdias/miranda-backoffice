import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    email: "a@a.com",
    password: "password",
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      console.log(`esto es el state en el store ${state}`);
      if (email === "a@a.com" && password === "password") {
        state.authenticated = true;
      }
    },
    logout: (state) => {
      state.authenticated = false;
      state.email = "";
      state.password = "";
    },
    updateUser: (state, action) => {
      state.email = action.payload.mail;
      state.password = action.payload.password;
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;
