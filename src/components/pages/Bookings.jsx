import {
  BookingsTopWrap,
  BookingsTopLeftWrap,
  BookingsTopRightWrap,
  UserEditButton,
} from "../styles/Bookings.styles";
import Dropdown from "../Dropdown";
import BookingsTable from "../BookingTable";
import BookingsData from "../../data/bookings.json";

function Bookings() {
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
  const rowDataArray = BookingsData;

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
