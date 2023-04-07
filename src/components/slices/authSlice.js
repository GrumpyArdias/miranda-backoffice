import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "a@a.com",
  password: "password",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      console.log(`Esto es el mail del auth ${state}`);
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setEmail, setPassword, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
