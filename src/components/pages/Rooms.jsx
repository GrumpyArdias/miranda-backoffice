import {
  RoomsTopWrap,
  RoomsTopLeftWrap,
  RoomsTopRightWrap,
  NewRoomButton,
} from "../styles/Rooms.styles";
import Dropdown from "../Dropdown";
import RoomsTable from "../RoomsTable";
import Data from "../../data.json";

function Rooms() {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  const headerArray = [
    "Room",
    "Bed Type",
    "Facilites",
    "Rate",
    "Offer Price",
    "Status",
  ];
  const rowDataArray = Data;

  return (
    <>
      <RoomsTopWrap>
        <RoomsTopLeftWrap>
          <div className="Rooms-menu-cell">
            <h3>All Rooms</h3>
          </div>
          <div className="Rooms-menu-cell">
            <h3>Available Rooms</h3>
          </div>
          <div className="Rooms-menu-cell">
            <h3>Booked Rooms Out</h3>
          </div>
        </RoomsTopLeftWrap>
        <RoomsTopRightWrap>
          <NewRoomButton>
            <p>+ New Room</p>
          </NewRoomButton>
          <Dropdown options={options} onSelect={handleSelect} />
        </RoomsTopRightWrap>
      </RoomsTopWrap>
      <RoomsTable headerArray={headerArray} rowDataArray={rowDataArray} />
    </>
  );
}
export default Rooms;
