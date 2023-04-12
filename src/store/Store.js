import { configureStore } from "@reduxjs/toolkit";
import bookingsSlice from "../slices/bookingsSlice";
import roomsSlice from "../slices/roomsSlice";
import userSlice from "../slices/userSlice";
import contactSlice from "../slices/contactSlice";
const store = configureStore({
  reducer: {
    bookings: bookingsSlice,
    rooms: roomsSlice,
    users: userSlice,
    contacts: contactSlice,
  },
});

export default store;
