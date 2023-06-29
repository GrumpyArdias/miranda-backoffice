import {
  BookingsTopWrap,
  BookingsTopLeftWrap,
  BookingsTopRightWrap,
  NewBookingButton,
} from "../styles/Bookings.styles";
import Dropdown from "../Dropdown";
import BookingsTable from "../BookingTable";
import { getAllBookings } from "../../slices/bookingsSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import React from "react";
import { BookingType } from "../../@types/bookings";
import { useNavigate } from "react-router-dom";

function Bookings() {
  const dispatch = useAppDispatch();
  const bookings: BookingType[] = useAppSelector(
    (state) => state.bookings.bookings
  );
  const [rowDataArray, setRowDataArray] = useState([]);
  console.log("This is bookings in Bookings:", bookings);

  useEffect(() => {
    dispatch(getAllBookings())
      .unwrap()
      .then((bookings) => setRowDataArray(bookings));
  }, [dispatch]);

  const options = ["Date", "CheckIn", "CheckOut"];

  const handleSelect = (option: string[]) => {};

  const headerArray: string[] = [
    "Nombre",
    "Date",
    "Check-In",
    "Check-Out",
    "Special Request",
    "Room Type",
    "Status",
  ];
  // const rowDataArray: BookingType[] = bookings;

  // const handleBookingFilter = (option: string) => {
  //   switch (option) {
  //     case "inProgress":
  //       return setRowDataArray(bookings);
  //     case "available":
  //       const cancelRooms = [...rowDataArray].sort((a, b) => {
  //         if (a.status === b.status) {
  //           return 0;
  //         }
  //         return a.status ? -1 : 1;
  //       });

  //       return setRowDataArray(cancelRooms);

  //     case "booked":
  //       const booked = [...rowDataArray].sort((a, b) => {
  //         if (b.status === a.status) {
  //           return 0;
  //         }
  //         return b.status ? -1 : 1;
  //       });

  //       return setRowDataArray(booked);

  //     default:
  //       return console.error("Error handleling the Filter");
  //   }
  // };
  const navigate = useNavigate();
  const dateFixerHandler = (date: string) => {
    const dateParts: string[] = date.split("/");
    const dateObject: Date = new Date(
      Number(dateParts[2]),
      Number(dateParts[0]) - 1,
      Number(dateParts[1])
    );
    return dateObject.getTime();
  };

  const handleBookingFilter = (option: string) => {
    switch (option) {
      case "AllBookings":
        return setRowDataArray(bookings);

      case "CheckIn":
        const checkIn: BookingType[] = [...bookings].sort(
          (a, b) => dateFixerHandler(b.checkIn) - dateFixerHandler(a.checkIn)
        );

        return setRowDataArray(checkIn);

      case "CheckOut":
        const checkOut = [...bookings].sort((a, b) => {
          return dateFixerHandler(b.checkOut) - dateFixerHandler(a.checkOut);
        });

        return setRowDataArray(checkOut);

      case "inProgress":
        const inProgress = [...bookings].filter(
          (item) => item.status === "inProgress"
        );
        return setRowDataArray(inProgress);

      case "booked":
        const booked = [...bookings].filter((item) => item.status === "Booked");
        return setRowDataArray(booked);

      case "refound":
        const refound = [...bookings].filter(
          (item) => item.status === "Canceled"
        );
        return setRowDataArray(refound);

      case "Date":
        const date = [...bookings].sort((a, b) => {
          return (
            dateFixerHandler(b.bookingDate) - dateFixerHandler(a.bookingDate)
          );
        });
        return setRowDataArray(date);

      default:
        return setRowDataArray(bookings);
    }
  };

  return (
    <div>
      <BookingsTopWrap>
        <BookingsTopLeftWrap>
          <div
            className="Bookings-menu-cell"
            onClick={() => {
              return handleBookingFilter("AllBookings");
            }}
          >
            <h3>All Bookings</h3>
          </div>
          <div
            className="Bookings-menu-cell"
            onClick={() => {
              return handleBookingFilter("booked");
            }}
          >
            <h3>Booked</h3>
          </div>
          <div
            className="Bookings-menu-cell"
            onClick={() => {
              return handleBookingFilter("refound");
            }}
          >
            <h3>Refound</h3>
          </div>
          <div
            className="Bookings-menu-cell"
            onClick={() => {
              return handleBookingFilter("inProgress");
            }}
          >
            <h3>In Progress</h3>
          </div>
        </BookingsTopLeftWrap>
        <BookingsTopRightWrap>
          <Dropdown options={options} onSelect={handleBookingFilter} />
          <NewBookingButton
            data-cy="new-user-button"
            onClick={() => navigate("/bookings/newbooking")}
          >
            <p>+ New Booking</p>
          </NewBookingButton>
        </BookingsTopRightWrap>
      </BookingsTopWrap>
      <BookingsTable
        data-cy="BookingsTable"
        headerArray={headerArray}
        rowDataArray={rowDataArray}
      />
    </div>
  );
}
export default Bookings;
