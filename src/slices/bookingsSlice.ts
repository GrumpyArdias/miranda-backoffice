import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import BookingArray from "../data/bookings.json";
import { v4 as uuid } from "uuid";
import { BookingType, IBookingState, UpdateBooking } from "../@types/bookings";

const initialState: IBookingState = {
  bookings: [],
  booking: {} as BookingType,
};

export const getAllBookings = createAsyncThunk(
  "bookings/getAllBookings",
  async () => {
    try {
      const data: BookingType[] = await new Promise<BookingType[]>(
        (resolve) => {
          setTimeout(() => {
            console.log("Inside promise, before resolving", BookingArray);
            return resolve(BookingArray);
          }, 200);
        }
      );
      console.log("Inside getAllBookings, after promise", data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getOneBook = createAsyncThunk(
  "bookings/getOneBook",
  async ({ id }: BookingType) => {
    try {
      const data = await new Promise<BookingType>((resolve) => {
        setTimeout(() => {
          resolve(BookingArray.find((booking) => booking.id === id));
        }, 200);
      });
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
      const id = uuid();
      const data = await new Promise<BookingType>((resolve) => {
        setTimeout(() => {
          resolve({ ...newBooking, id });
        }, 200);
      });
      return data;
    } catch (error) {}
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async ({ id }: BookingType) => {
    try {
      const data = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(id);
        }, 200);
      });
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
      const data = await new Promise<BookingType>((resolve) => {
        setTimeout(() => {
          resolve({ ...body, id });
        }, 200);
      });
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
