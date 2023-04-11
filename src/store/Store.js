import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/slices/authSlice";
import bookingsSlice from "../components/slices/bookingsSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    bookings: bookingsSlice,
  },
});

export default store;
