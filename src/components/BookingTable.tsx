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
  BedWrapper,
} from "./styles/BookingTable.styles";
import Cat from "../images/cat3.jpg";
import { v4 as uuid } from "uuid";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { deleteBooking } from "../slices/bookingsSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppDispatch } from "../hooks/hooks";
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

  const handelRoomSwitch = (option: string) => {
    switch (option) {
      case "single":
        return "Single Bed";
      case "double":
        return "Double Bed";
      case "double-superior":
        return "Double Superior";
      case "suite":
        return "Suite";
      default:
        return "error in the room type";
    }
  };

  const handleStatusSwitch = (status: string) => {
    switch (status) {
      case "Canceled":
        return (
          <RefoundStatus>
            <p>Refound</p>
          </RefoundStatus>
        );
      case "Booked":
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

  const handleColor = (option: string) => {
    switch (option) {
      case "single":
        return { backgroundColor: "#cd7f32" };
      case "double":
        return { backgroundColor: "#C0C0C0" };
      case "double-superior":
        return { backgroundColor: "#e5e4e2" };
      case "suite":
        return { backgroundColor: "#999578" };
      default:
        return { backgroundColor: "error in the room type" };
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
              <tr key={data.id}>
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
                <td colSpan={2}>
                  <BedWrapper style={handleColor(data.roomType)}>
                    {handelRoomSwitch(data.roomType)}
                  </BedWrapper>
                </td>
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
