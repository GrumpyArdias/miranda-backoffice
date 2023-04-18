import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BookingArray from "../data/bookings.json";

const initialState = {
  bookings: [],
  book: {},
};

function delay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}

export const getAllBookings = createAsyncThunk(
  "bookings/getAllBookings",
  async () => {
    try {
      return await delay(BookingArray);
    } catch (error) {
      alert(`Can't get all the bookings right now, error: ${error}`);
    }
  }
);

export const getOneBook = createAsyncThunk(
  "bookings/getOneBook",
  async (id) => {
    try {
      return await delay(id);
    } catch {
      throw new Error("Failed to fetch the booking.");
    }
  }
);

export const createBookings = createAsyncThunk(
  "bookings/createBookings",
  async (newBooking) => {
    try {
      return await delay({
        ...newBooking,
        id: Math.round(Math.random() * 200),
      });
    } catch {
      throw new Error("Failed to create a new Booking");
    }
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async (id) => {
    try {
      return await delay(id);
    } catch {
      throw new Error("Error to delete the booking");
    }
  }
);

export const updateBooking = createAsyncThunk(
  "bookings/updateBooking",
  async (updateBooking) => {
    try {
      return await delay(...updateBooking);
    } catch {
      throw new Error("Error updating the booking");
    }
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        console.log("esto es el estado de bookings id ");
        console.log(typeof state.bookings.id);

        state.bookings = action.payload;

        switch (action.type) {
          case getAllBookings.fulfilled.type:
            state.bookings = action.payload;
            break;
          case getOneBook.fulfilled.type:
            state.book = state.bookings.find(
              (booking) => booking.id === action.payload
            );
            console.log(state.book.id);
            break;
          case createBookings.fulfilled.type:
            state.bookings = [...state.bookings, action.payload];
            break;
          case deleteBooking.fulfilled.type:
            state.bookings = state.bookings.filter(
              (booking) => booking.id !== action.payload
            );
            break;
          case updateBooking.fulfilled.type:
            state.bookings = state.bookings.map((booking) =>
              booking.id === action.payload.id ? action.payload : booking
            );
            break;
          default:
            // Default case
            break;
        }
      }
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        console.log("Loading...");
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state) => {
        console.log("Error...");
      }
    );
  },
});

export default bookingsSlice.reducer;
