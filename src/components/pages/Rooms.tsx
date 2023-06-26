import {
  RoomsTopWrap,
  RoomsTopLeftWrap,
  RoomsTopRightWrap,
  NewRoomButton,
} from "../styles/Rooms.styles";
import RoomsTable from "../RoomsTable";
import { useState } from "react";
import { getAllRooms } from "../../slices/roomsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

function Rooms() {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.rooms.rooms);
  const navigate = useNavigate();
  const [rowDataArray, setRowDataArray] = useState(rooms);

  console.log("this is rooms", rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  useEffect(() => {
    setRowDataArray(rooms);
  }, [rooms]);

  // useEffect(() => {
  //   console.log(rowDataArray);
  // }, [rowDataArray]);

  const headerArray = [
    "Room",
    "Bed Type",
    "Facilities",
    "Rate",
    "Offer Price",
    "Status",
  ];

  const HandleRoomFilter = (option: string) => {
    switch (option) {
      case "allRooms":
        return setRowDataArray(rooms);
      case "available":
        const availableRooms = [...rowDataArray].sort((a, b) => {
          if (a.estatus === b.estatus) {
            return 0;
          }
          return a.estatus ? -1 : 1;
        });

        return setRowDataArray(availableRooms);

      case "booked":
        const bookedRooms = [...rowDataArray].sort((a, b) => {
          if (b.estatus === a.estatus) {
            return 0;
          }
          return b.estatus ? -1 : 1;
        });

        return setRowDataArray(bookedRooms);
      default:
        return console.error("Error handleling the Filter");
    }
  };

  useEffect(() => {
    console.log(rowDataArray);
  }, [rowDataArray]);

  return (
    <>
      <RoomsTopWrap>
        <RoomsTopLeftWrap>
          <div
            className="Rooms-menu-cell"
            onClick={() => {
              console.log("click");
              HandleRoomFilter("allRooms");
            }}
          >
            <h3>All Rooms</h3>
          </div>
          <div
            className="Rooms-menu-cell"
            onClick={() => {
              console.log("test");
              return HandleRoomFilter("available");
            }}
          >
            <h3>Available Rooms</h3>
          </div>
          <div
            className="Rooms-menu-cell"
            onClick={() => {
              console.log("test");
              HandleRoomFilter("booked");
            }}
          >
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
        </RoomsTopRightWrap>
      </RoomsTopWrap>
      <RoomsTable headerArray={headerArray} rowDataArray={rowDataArray} />
    </>
  );
}
export default Rooms;
