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
      const params = {
        option: "bookings",
        method: "GET",
        token: token,
      };
      const data: BookingType[] = await apiFetch(params);
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
      const params = {
        option: "bookings",
        method: "GET",
        token: token,
        id: id,
      };
      const data: BookingType = await apiFetch(params);
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
      const bookingToString = JSON.stringify(newBooking);
      const token = localStorage.getItem("token");
      const params = {
        option: "bookings",
        method: "POST",
        token: token,
        body: bookingToString,
      };

      const data = await apiFetch(params);
      return data;
    } catch (error) {}
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async ({ id }: BookingType) => {
    try {
      const token = localStorage.getItem("token");
      const params = {
        option: "bookings",
        method: "DELETE",
        token: token,
        id: id,
      };
      const data = await apiFetch(params);
      console.log(data);
      return id;
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
      const params = {
        option: "bookings",
        method: "PUT",
        token: token,
        id: id,
        body: bookingToString,
      };
      const data = await apiFetch(params);
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
