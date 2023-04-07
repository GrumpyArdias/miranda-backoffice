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
  CanceledStatus,
} from "./styles/BookingTable.styles";
import Cat from "../images/cat3.jpg";
import { v4 as uuid } from "uuid";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function BookingTable(props) {
  const [clickedId, setClickedId] = useState(null);
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;

  const handleNoteClick = (dataId) => {
    setClickedId(dataId);
  };

  const handelRoomSwitch = (option) => {
    switch (option) {
      case "1":
        return "Single Bed";
      case "2":
        return "Double Bed";
      case "3":
        return "Double Superior";
      case "4":
        return "Suite";
      default:
        return "error in the room type";
    }
  };

  // Fix the status, take care of the number of inputs
  const handleStatusSwitch = (status) => {
    switch (status) {
      case "1":
        return (
          <RefoundStatus>
            <p>Refound</p>
          </RefoundStatus>
        );
      case "2":
        return (
          <BookedStatus>
            <p>Booked</p>
          </BookedStatus>
        );
      case "3":
        return (
          <PendingStatus>
            <p>In progress</p>
          </PendingStatus>
        );
      case "4":
        return (
          <CanceledStatus>
            <p>In progress</p>
          </CanceledStatus>
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
                <td colSpan={2}>{data.order_date}</td>
                <td colSpan={2}>{data.check_in}</td>
                <td colSpan={2}>{data.check_out}</td>
                <td colSpan={2}>
                  {data.notes ? (
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
                <td colSpan={2}>{handelRoomSwitch(data.room_type)}</td>
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
