import {
  RoomsTopWrap,
  RoomsTopLeftWrap,
  RoomsTopRightWrap,
  NewRoomButton,
} from "../styles/Rooms.styles";
import Dropdown from "../Dropdown";
import RoomsTable from "../RoomsTable";

import { getAllRooms } from "../../slices/roomsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

function Rooms() {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.rooms.rooms);
  const navigate = useNavigate();

  console.log("this is rooms", rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option: string[]) => {
    console.log(`Selected option: ${option}`);
  };

  const headerArray = [
    "Room",
    "Bed Type",
    "Facilities",
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
          <NewRoomButton
            data-cy="new-room-button"
            className="NewRoomButton"
            data-testid="new-room-button"
            onClick={() => navigate("/rooms/newroom")}
          >
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
