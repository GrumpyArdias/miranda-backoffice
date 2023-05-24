import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { BookingType, IBookingState, UpdateBooking } from "../@types/bookings";
import { apiFetch } from "../utils/apiFetch";
const initialState: IBookingState = {
  bookings: [],
  booking: {} as BookingType,
};

export const getAllBookings = createAsyncThunk(
  "bookings/getAllBookings",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const data: BookingType[] = await apiFetch("bookings", "GET", token);
      console.log("Inside getAllBookings, after apiFetch", data);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export const getOneBook = createAsyncThunk(
  "bookings/getOneBook",
  async ({ id }: BookingType) => {
    try {
      const token = localStorage.getItem("token");
      const data: BookingType = await apiFetch("bookings", "GET", token, id);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const createBookings = createAsyncThunk(
  "bookings/createBookings",
  async (newBooking: BookingType) => {
    try {
      const token = localStorage.getItem("token");
      const id = uuid();
      newBooking.id = id;

      const bookingToString = JSON.stringify(newBooking);
      const data = await apiFetch("bookings", "POST", token, bookingToString);
      return data;
    } catch (error) {}
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async ({ id }: BookingType) => {
    try {
      const token = localStorage.getItem("token");
      const data = await apiFetch("bookings", "DELETE", token, id);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateBooking = createAsyncThunk(
  "bookings/updateBooking",
  async ({ body, id }: UpdateBooking) => {
    try {
      const token = localStorage.getItem("token");
      const bookingToString = JSON.stringify(body);
      const data = await apiFetch(
        "bookings",
        "PUT",
        token,
        id,
        bookingToString
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBookings.fulfilled, (state, action) => {
        console.log("getAllBookings.fulfilled", action.payload);
        state.bookings = action.payload;
      })

      .addCase(getOneBook.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.booking = state.bookings.find((booking) => booking.id === id);
        console.log("getOneBook.fulfilled", state.booking.id);
      })

      .addCase(createBookings.fulfilled, (state, action) => {
        state.bookings = [...state.bookings, action.payload];
        console.log("createBookings.fulfilled", state.bookings);
      })

      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== action.payload
        );
        console.log("deleteBooking.fulfilled", state.bookings);
      })

      .addCase(updateBooking.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.bookings = state.bookings.map((booking) =>
          booking.id === id ? action.payload : booking
        );
      });

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
        console.log("Error action type:", action.type);
      }
    );
  },
});

export default bookingsSlice.reducer;
