import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Bookings from "../../data/bookings.json";

function delay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}

export const fetchBookings = createAsyncThunk(
  "post/fetchBookings",
  async () => {
    try {
      return await delay(Bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);

      throw new Error("Failed to fetch bookings.");
    }
  }
);

export const fetchOneBooking = createAsyncThunk(
  "post/fetchBookings",
  async (id) => {
    try {
      return await delay(id);
    } catch {
      throw new Error("Failed to fetch the booking.");
    }
  }
);

export const createBookings = createAsyncThunk(
  "post/fetchBookings",
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
  "post/fetchBookings",
  async (id) => {
    try {
      return await delay(id);
    } catch {
      throw new Error("Error to delete the booking");
    }
  }
);

export const updateBooking = createAsyncThunk(
  "post/fetchBookings",
  async (updateBooking) => {
    try {
      return await delay(...updateBooking);
    } catch {
      throw new Error("Error updating the booking");
    }
  }
);

const initialState = {
  bookings: [],
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.pending, (state) => {
        console.log("pendiente");
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        console.log("Exito");
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state) => {
        console.log("ha fallado");
      });
  },
});

export default bookingsSlice.reducer;
