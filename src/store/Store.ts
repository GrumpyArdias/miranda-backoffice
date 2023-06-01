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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
