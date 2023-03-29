import {
  BookingsTopWrap,
  BookingsTopLeftWrap,
  BookingsTopRightWrap,
  UserEditButton,
} from "./styles/Bookings.styles";
import Dropdown from "./Dropdown";

function Bookings() {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <BookingsTopWrap>
        <BookingsTopLeftWrap>
          <div className="Bookings-menu-cell">
            <h3>All Rooms</h3>
          </div>
          <div className="Bookings-menu-cell">
            <h3>Active Employee</h3>
          </div>
          <div className="Bookings-menu-cell">
            <h3>Inactive Employee</h3>
          </div>
        </BookingsTopLeftWrap>
        <BookingsTopRightWrap>
          <UserEditButton>
            <p>+ New Room</p>
          </UserEditButton>
          <Dropdown options={options} onSelect={handleSelect} />
        </BookingsTopRightWrap>
      </BookingsTopWrap>
    </div>
  );
}
export default Bookings;
