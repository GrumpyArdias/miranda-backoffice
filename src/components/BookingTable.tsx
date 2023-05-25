import {
  BookingTableStyle,
  DataRowWrapper,
  PhotoRowWrapper,
  TextRowWrapper,
  NotesAvailable,
  NotNotesAvailable,
  RefoundStatus,
  BookedStatus,
  PendingStatus,
  TdWrapper,
  StatusWrapper,
  IconWrapper,
} from "./styles/BookingTable.styles";
import Cat from "../images/cat3.jpg";
import { v4 as uuid } from "uuid";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { deleteBooking } from "../slices/bookingsSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppDispatch } from "../hooks/hooks";
import Rooms from "../data/rooms.json";
import React from "react";
import { BookingType, BookingProps } from "../@types/bookings";

function BookingTable(props: BookingProps) {
  const [clickedId, setClickedId] = useState(null);
  const headerArray: string[] = props.headerArray;
  const rowDataArray: BookingType[] = props.rowDataArray;

  const dispatch = useAppDispatch();

  const handleNoteClick = (dataId: string) => {
    setClickedId(dataId);
  };

  //TODO FIX THIS AFTER ROOMS REFACTOR
  const handelRoomSwitch = (data: BookingType) => {
    let roomType = "Error assigning Room"; // Default room type

    Rooms.forEach((room) => {
      if (
        (room.status === true && data.status === "Booked") ||
        data.status === "inProgress"
      ) {
        if (room.id === data.id) {
          roomType = room.bedType;
        }
      } else {
        roomType = "Status not eligible for a Room"; // Update room type for ineligible status
      }
    });
    console.log("esto es RoomType", roomType);
    return roomType; // Return the final room type
  };

  const handleStatusSwitch = (status: string) => {
    switch (status) {
      case "refound":
        return (
          <RefoundStatus>
            <p>Refound</p>
          </RefoundStatus>
        );
      case "booked":
        return (
          <BookedStatus>
            <p>Booked</p>
          </BookedStatus>
        );
      case "inProgress":
        return (
          <PendingStatus>
            <p>In progress</p>
          </PendingStatus>
        );

      default:
        return "error in the room type";
    }
  };

  const handleDelete = (booking: BookingType) => {
    console.log(booking);
    dispatch(deleteBooking(booking));
  };

  console.log(rowDataArray);

  return (
    <div>
      <BookingTableStyle>
        <thead>
          <tr>
            {headerArray.map((header) => {
              return (
                <th colSpan={2} key={uuid()}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowDataArray.map((data) => {
            return (
              // This must be shorted using a proper ID
              <tr key={uuid()}>
                <td colSpan={2}>
                  <DataRowWrapper className="wrapper">
                    <PhotoRowWrapper className="image">
                      <img src={Cat} alt="it's user face" />
                    </PhotoRowWrapper>
                    <TextRowWrapper className="text">
                      <h4>{data.fullName}</h4>
                      <h5>{data.id}</h5>
                    </TextRowWrapper>
                  </DataRowWrapper>
                </td>
                <td colSpan={2}>{data.bookingDate}</td>
                <td colSpan={2}>{data.checkIn}</td>
                <td colSpan={2}>{data.checkOut}</td>
                <td colSpan={2} data-cy="NotesButton">
                  {data.specialRquest ? (
                    clickedId ? (
                      <Navigate to={`/bookings/${clickedId}`} />
                    ) : (
                      <NotesAvailable
                        //this id must be change for a proper booking id
                        onClick={() => handleNoteClick(data.id)}
                      >
                        <p>View Notes</p>
                      </NotesAvailable>
                    )
                  ) : (
                    <NotNotesAvailable>
                      <p>No Notes</p>
                    </NotNotesAvailable>
                  )}
                </td>
                <td colSpan={2}>{handelRoomSwitch(data)}</td>
                <td colSpan={2}>
                  <TdWrapper className="TdWrapper">
                    <StatusWrapper>
                      {handleStatusSwitch(data.status)}
                    </StatusWrapper>
                    <IconWrapper>
                      <DeleteForeverIcon
                        data-cy="deleteButton"
                        style={{ color: "red" }}
                        onClick={() => handleDelete(data)}
                      />
                    </IconWrapper>
                  </TdWrapper>
                </td>
              </tr>
            );
          })}
        </tbody>
      </BookingTableStyle>
    </div>
  );
}

export default BookingTable;
