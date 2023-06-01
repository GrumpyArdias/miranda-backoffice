import {
  BookingsTopWrap,
  BookingsTopLeftWrap,
  BookingsTopRightWrap,
} from "../styles/Bookings.styles";
import Dropdown from "../Dropdown";
import BookingsTable from "../BookingTable";
import { getAllBookings } from "../../slices/bookingsSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import React from "react";
import { BookingType } from "../../@types/bookings";

function Bookings() {
  const dispatch = useAppDispatch();
  const bookings: BookingType[] = useAppSelector(
    (state) => state.bookings.bookings
  );
  console.log("This is bookings in Bookings:", bookings);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  // useEffect(() => {
  //   if (bookings.length === 0) {
  //     navigate("/");
  //   }
  //   console.log(bookings);
  // }, [bookings, navigate]);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option: string[]) => {
    console.log(`Selected option: ${option}`);
  };

  const headerArray: string[] = [
    "Nombre",
    "Date",
    "Check-In",
    "Check-Out",
    "Special Request",
    "Room Type",
    "Status",
  ];
  const rowDataArray: BookingType[] = bookings;

  return (
    <div>
      <BookingsTopWrap>
        <BookingsTopLeftWrap>
          <div className="Bookings-menu-cell">
            <h3>All Bookings</h3>
          </div>
          <div className="Bookings-menu-cell">
            <h3>Checking In</h3>
          </div>
          <div className="Bookings-menu-cell">
            <h3>Checking Out</h3>
          </div>
          <div className="Bookings-menu-cell">
            <h3>In Progress</h3>
          </div>
        </BookingsTopLeftWrap>
        <BookingsTopRightWrap>
          <Dropdown options={options} onSelect={handleSelect} />
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
