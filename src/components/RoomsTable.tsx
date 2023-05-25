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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteRoom } from "../slices/roomsSlice";
import { RoomProps, RoomType } from "../@types/rooms";
import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import Single from "../images/single.jpg";
import Double from "../images/double.jpg";
import DoubleSuperior from "../images/doubleSuperior.jpg";
import Suite from "../images/suite.jpg";

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
      case "double-superior":
        return "Double Superior";
      case "suite":
        return "Suite";
      default:
        return "error in the room type";
    }
  };

  const handleRoomImage = (option: string) => {
    switch (option) {
      case "single":
        return Single;
      case "double":
        return Double;
      case "double-superior":
        return DoubleSuperior;
      case "suite":
        return Suite;
      default:
        return "error in the room type";
    }
  };

  const handleStatusSwitch = (estatus: boolean) => {
    switch (estatus) {
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
  const handleDiscount = (cost: number, discount: number) => {
    const discountPrice = (cost * discount) / 100;
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
            <tr key={data.id}>
              <td colSpan={2}>
                <DataRowWrapper className="wrapper">
                  <PhotoRowWrapper className="image">
                    {<img src={handleRoomImage(data.bedType)} alt="" />}
                  </PhotoRowWrapper>
                  <TextRowWrapper className="text">
                    <h5>
                      Floor: {data.floorNumber} <br /> Room: {data.doorNumber}
                    </h5>
                    <h6>{data.id}</h6>
                  </TextRowWrapper>
                </DataRowWrapper>
              </td>
              <td colSpan={2}>{handleRoomSwitch(data.bedType)}</td>
              <td colSpan={2}>
                {data.facilities.map((f) => {
                  return `${f}, `;
                })}
              </td>
              <td colSpan={2}> {data.price} € / Night</td>
              <td colSpan={2}>
                {Math.round(handleDiscount(data.price, data.discount))} € <br />{" "}
                ({Math.round(data.discount)} % off)
              </td>
              <td colSpan={2}>
                <TdWrapper className="TdWrapper">
                  <StatusWrapper>
                    {handleStatusSwitch(data.estatus)}
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
