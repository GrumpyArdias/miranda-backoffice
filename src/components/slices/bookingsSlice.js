import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BookingArray from "../../data/bookings.json";

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

export const getOneBook = createAsyncThunk("post/getOneBook", async (id) => {
  try {
    return await delay(id);
  } catch {
    throw new Error("Failed to fetch the booking.");
  }
});

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
  extraReducers: {
    // GET ALL BOOKS
    [getAllBookings.fulfilled]: (state, action) => {
      console.log("success");
      state.bookings = action.payload;
    },
    [getAllBookings.pending]: (state) => {
      console.log("Loading...");
    },
    [getAllBookings.rejected]: (state) => {
      console.log("Error fetching Bookings...");
    },
    // GET ONE BOOK
    [getOneBook.fulfilled]: (state, action) => {
      console.log("success");
      state.book = state.bookings.find(
        (booking) => booking.id === action.payload
      );
    },
    [getOneBook.pending]: (state) => {
      console.log("Loading...");
    },
    [getOneBook.rejected]: (state) => {
      console.log("Error Fetching the book...");
    },

    // CRREATE ONE BOOKING
    [createBookings.fulfilled]: (state, action) => {
      console.log("success");
      state.bookings = [...state.bookings, action.payload];
    },
    [createBookings.pending]: (state) => {
      console.log("Loading...");
    },
    [createBookings.rejected]: (state) => {
      console.log("Error creating new Booking");
    },

    // DELETING ONE BOOKING
    [deleteBooking.fulfilled]: (state, action) => {
      console.log("success");
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },
    [deleteBooking.pending]: (state) => {
      console.log("Loading...");
    },
    [deleteBooking.rejected]: (state) => {
      console.log("Error Deleting the Booking");
    },
    // UPDATING ONE BOOKING
    [updateBooking.fulfilled]: (state, action) => {
      console.log("success");
      state.bookings = state.bookings.map((booking) => {
        return booking.id === action.payload.id ? action.payload : booking;
      });
    },
    [updateBooking.pending]: (state) => {
      console.log("Loading...");
    },
    [updateBooking.rejected]: (state) => {
      console.log("Error updating the Booking");
    },
  },
});

export default bookingsSlice.reducer;
