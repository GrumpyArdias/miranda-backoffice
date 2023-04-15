import {
  RoomsTopWrap,
  RoomsTopLeftWrap,
  RoomsTopRightWrap,
  NewRoomButton,
} from "../styles/Rooms.styles";
import Dropdown from "../Dropdown";
import RoomsTable from "../RoomsTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../../slices/roomsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

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
  const rowDataArray = rooms;

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
          <NewRoomButton onClick={() => navigate("/rooms/newroom")}>
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
