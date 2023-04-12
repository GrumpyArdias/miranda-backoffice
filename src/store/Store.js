import { configureStore } from "@reduxjs/toolkit";
import bookingsSlice from "../slices/bookingsSlice";
import roomsSlice from "../slices/roomsSlice";
const store = configureStore({
  reducer: {
    bookings: bookingsSlice,
    rooms: roomsSlice,
  },
});

export default store;
