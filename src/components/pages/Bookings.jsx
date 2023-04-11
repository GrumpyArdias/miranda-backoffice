import {
  BookingsTopWrap,
  BookingsTopLeftWrap,
  BookingsTopRightWrap,
  UserEditButton,
} from "../styles/Bookings.styles";
import Dropdown from "../Dropdown";
import BookingsTable from "../BookingTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../slices/bookingsSlice";
import { useEffect } from "react";

function Bookings() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  const headerArray = [
    "Nombre",
    "Date",
    "Check-In",
    "Check-Out",
    "Special Request",
    "Room Type",
    "Status",
  ];
  const rowDataArray = bookings;

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
          <UserEditButton>
            <p>+ New Room</p>
          </UserEditButton>
          <Dropdown options={options} onSelect={handleSelect} />
        </BookingsTopRightWrap>
      </BookingsTopWrap>
      <BookingsTable headerArray={headerArray} rowDataArray={rowDataArray} />
    </div>
  );
}
export default Bookings;
