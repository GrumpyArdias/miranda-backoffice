import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  current,
} from "@reduxjs/toolkit";
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
      console.log("esto es el BookingArray", BookingArray);
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
      isAnyOf(
        getAllBookings.fulfilled,
        getOneBook.fulfilled,
        createBookings.fulfilled,
        deleteBooking.fulfilled,
        updateBooking.fulfilled
      ),
      (state, action) => {
        switch (action.type) {
          case getAllBookings.fulfilled.type:
            state.bookings = action.payload;
            // console.log("state", current(state));
            // console.log("ActionPayload:", action.payload);
            break;

          case getOneBook.fulfilled.type:
            state.book = state.bookings.find(
              (booking) => booking.id === action.payload
            );
            console.log("getOneBook.fulfilled", state.book.id);
            break;

          case createBookings.fulfilled.type:
            state.bookings = [...state.bookings, action.payload];
            console.log("createBookings.fulfilled", state.bookings);
            break;

          case deleteBooking.fulfilled.type:
            console.log("state", current(state));
            console.log("Action Payload:", action.payload);
            state.bookings = state.bookings.filter(
              (booking) => booking.id !== action.payload
            );
            console.log("deleteBooking.fulfilled", state.bookings);
            break;

          case updateBooking.fulfilled.type:
            state.bookings = state.bookings.map((booking) =>
              booking.id === action.payload.id ? action.payload : booking
            );
            console.log("updateBooking.fulfilled", state.bookings);
            break;

          default:
            // Default case
            break;
        }
      }
    );

    builder.addMatcher(
      isAnyOf(
        getAllBookings.pending,
        getOneBook.pending,
        createBookings.pending,
        deleteBooking.pending,
        updateBooking.pending
      ),
      (state) => {
        console.log("Loading...");
        // console.log("state", current(state));
      }
    );

    builder.addMatcher(
      isAnyOf(
        getAllBookings.rejected,
        getOneBook.rejected,
        createBookings.rejected,
        deleteBooking.rejected,
        updateBooking.rejected
      ),
      (state, action) => {
        console.log("Error:", action.error.message);
        console.log("Error action type:", action.type);
        console.log("Previous state:", state);
      }
    );
  },
});

export default bookingsSlice.reducer;
