import {
  RoomsTableStyle,
  DataRowWrapper,
  PhotoRowWrapper,
  TextRowWrapper,
  AvailableStatus,
  BookedStatus,
  TdWrapper,
  StatusWrapper,
  IconWrapper,
} from "./styles/RoomsTable.styles";
import { v4 as uuid } from "uuid";
import Cat from "../images/cat3.jpg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteRoom } from "../slices/roomsSlice";
import { RoomProps, RoomType } from "../@types/rooms";
import React from "react";
import { useAppDispatch } from "../hooks/hooks";

function RoomsTable(props: RoomProps) {
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;
  const dispatch = useAppDispatch();
  const handleRoomSwitch = (option: string) => {
    switch (option) {
      case "single":
        return "Single Bed";
      case "double":
        return "Double Bed";
      case "doubleSuperior":
        return "Double Superior";
      case "suite":
        return "Suite";
      default:
        return "error in the room type";
    }
  };

  // Fix the status, take care of the number of inputs
  const handleStatusSwitch = (status: boolean) => {
    switch (status) {
      case true:
        return (
          <AvailableStatus>
            <p>Available</p>
          </AvailableStatus>
        );
      case false:
        return (
          <BookedStatus>
            <p>Booked</p>
          </BookedStatus>
        );

      default:
        return "error in the room type";
    }
  };
  const handleDiscount = (cost: number) => {
    const fixedDiscount = 10;
    const discountPrice = (cost * fixedDiscount) / 100;
    const finalPrice = cost - discountPrice;

    return finalPrice;
  };

  const handleDelete = (data: RoomType) => {
    dispatch(deleteRoom(data));
  };

  return (
    <RoomsTableStyle>
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
            //this must be change for a prorper room ID
            <tr key={uuid()}>
              <td colSpan={2}>
                <DataRowWrapper className="wrapper">
                  <PhotoRowWrapper className="image">
                    <img src={Cat} alt="it's user face" />
                  </PhotoRowWrapper>
                  <TextRowWrapper className="text">
                    <h5>{data.id}</h5>
                  </TextRowWrapper>
                </DataRowWrapper>
              </td>
              <td colSpan={2}>{handleRoomSwitch(data.bedType)}</td>
              <td colSpan={2}> {data.facilites}</td>
              <td colSpan={2}> {data.price} € / Night</td>
              <td colSpan={2}>
                {handleDiscount(data.price)} € <br /> (-10% off)
              </td>
              <td colSpan={2}>
                <TdWrapper className="TdWrapper">
                  <StatusWrapper>
                    {handleStatusSwitch(data.status)}
                  </StatusWrapper>
                  <IconWrapper>
                    <DeleteForeverIcon
                      data-cy="deleteButtonRoom"
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
    </RoomsTableStyle>
  );
}
export default RoomsTable;
