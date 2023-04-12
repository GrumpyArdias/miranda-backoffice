import {
  BookingTableStyle,
  DataRowWrapper,
  PhotoRowWrapper,
  TextRowWrapper,
  NotesAvalaible,
  NotNotesAvalible,
  RefoundStatus,
  BookedStatus,
  PendingStatus,
} from "./styles/BookingTable.styles";
import Cat from "../images/cat3.jpg";
import { v4 as uuid } from "uuid";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Rooms from "../data/rooms.json";

function BookingTable(props) {
  const [clickedId, setClickedId] = useState(null);
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;

  const handleNoteClick = (dataId) => {
    setClickedId(dataId);
  };

  const handelRoomSwitch = (id) => {
    let roomType = "Error assigning Room"; // Default room type

    Rooms.forEach((room) => {
      if (room.status === "booked" || room.status === "inProgress") {
        if (room.id === id) {
          roomType = room.bed_type;
        }
      } else {
        roomType = "Status not eligible for a Room"; // Update room type for ineligible status
      }
    });

    return roomType; // Return the final room type
  };

  const handleStatusSwitch = (status) => {
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
                      <h4>{data.full_name}</h4>
                      <h5>{data.client_id}</h5>
                    </TextRowWrapper>
                  </DataRowWrapper>
                </td>
                <td colSpan={2}>{data.date}</td>
                <td colSpan={2}>{data.check_in}</td>
                <td colSpan={2}>{data.check_out}</td>
                <td colSpan={2}>
                  {data.special_request ? (
                    clickedId ? (
                      <Navigate to={`/bookings/${clickedId}`} />
                    ) : (
                      <NotesAvalaible
                        //this id must be change for a proper booking id
                        onClick={() => handleNoteClick(data.room_id)}
                      >
                        <p>View Notes</p>
                      </NotesAvalaible>
                    )
                  ) : (
                    <NotNotesAvalible>
                      <p>No Notes</p>
                    </NotNotesAvalible>
                  )}
                </td>
                <td colSpan={2}>{handelRoomSwitch(data.room_id)}</td>
                <td colSpan={2}>{handleStatusSwitch(data.status)}</td>
              </tr>
            );
          })}
        </tbody>
      </BookingTableStyle>
    </div>
  );
}

export default BookingTable;
