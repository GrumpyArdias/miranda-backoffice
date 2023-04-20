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
import { useDispatch } from "react-redux";
import Rooms from "../data/rooms.json";

function BookingTable(props) {
  const [clickedId, setClickedId] = useState(null);
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;

  const dispatch = useDispatch();

  const handleNoteClick = (dataId) => {
    setClickedId(dataId);
  };

  const handelRoomSwitch = (data) => {
    let roomType = "Error assigning Room"; // Default room type

    Rooms.forEach((room) => {
      if (data.status === "booked" || data.status === "inProgress") {
        if (room.id === data.id) {
          roomType = room.bed_type;
        }
      } else {
        roomType = "Status not eligible for a Room"; // Update room type for ineligible status
      }
    });
    console.log("esto es RoomType", roomType);
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

  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
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
                        onClick={() => handleDelete(data.id)}
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
