import {
  BookWrapper,
  BookLeft,
  BookRight,
  BookLeftFirstBlock,
  UserInfo,
  UserPhoto,
  UserData,
  Checks,
  BookLeftSecondBlock,
  BookLeftThirdBlock,
  CheckIn,
  CheckOut,
  Info,
  RoomInfo,
  RoomPrice,
  TextInfo,
} from "../styles/Book.styles";
import { useParams } from "react-router-dom";
import { getOneBook } from "../../slices/bookingsSlice";
import { useEffect } from "react";
import { BookingType } from "../../@types/bookings";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { getOneRoom } from "../../slices/roomsSlice";
import { RoomType } from "../../@types/rooms";
import Single from "../../images/single.jpg";
import Double from "../../images/double.jpg";
import DoubleSuperior from "../../images/doubleSuperior.jpg";
import Suite from "../../images/suite.jpg";

function Book() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const OneBook: BookingType = useAppSelector(
    (state) => state.bookings.booking
  );
  const room: RoomType = useAppSelector((state) => state.rooms.room);
  useEffect(() => {
    dispatch(getOneBook(id));
  }, [dispatch, id]);

  useEffect(() => {
    OneBook.id && dispatch(getOneRoom(OneBook.roomId));
  }, [OneBook, dispatch]);
  if (!OneBook.id) {
    return <h1>Loading</h1>;
  }

  const handleRoomImage = (option: string) => {
    switch (option) {
      case "single":
        return Single;
      case "double":
        return Double;
      case "doubleSuperior":
        return DoubleSuperior;
      case "suite":
        return Suite;
      default:
        return "error in the room type";
    }
  };
  return (
    <BookWrapper className="BookWrapper">
      <BookLeft className="BookLeft">
        <BookLeftFirstBlock className="BookLeftFirstBlock">
          <UserInfo className="userInfo">
            <UserPhoto className="UserPhoto"> </UserPhoto>
            <UserData className="UserData">
              <h3>{OneBook.fullName}</h3>
              <p>ID {id}</p>
            </UserData>
          </UserInfo>
          <Checks className="Checks">
            <CheckIn className="CheckIn">
              <p>Check In</p>
              <h3>{OneBook.checkIn}</h3>
            </CheckIn>
            <CheckOut className="CheckOut">
              <p>Check Out</p>
              <h3>{OneBook.checkOut}</h3>
            </CheckOut>
          </Checks>
        </BookLeftFirstBlock>
        <BookLeftSecondBlock className="BookLeftSecondBlock">
          {room.price && (
            <Info className="info">
              <RoomInfo className="RoomInfo">
                <p>Room Type</p>
                <h3>{room.bedType?.toUpperCase()}</h3>
              </RoomInfo>
              <RoomPrice className="Price">
                <p>Room Price</p>
                <h3>
                  {room.price
                    ? Math.round(room.price * (1 - room.discount / 100))
                    : ""}
                  €
                </h3>
              </RoomPrice>
            </Info>
          )}
          <TextInfo className="TextInfo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi
              deleniti unde ipsam, corrupti, labore iusto consequuntur,
              provident odio et ducimus eligendi incidunt eius quam sit quia
              tempora eos! Odio?
            </p>
          </TextInfo>
        </BookLeftSecondBlock>
        <BookLeftThirdBlock className="BookLeftThirdBlock"></BookLeftThirdBlock>
      </BookLeft>
      <BookRight className="BookRight">
        {<img src={handleRoomImage(room?.bedType)} alt="" />}
      </BookRight>
    </BookWrapper>
  );
}

export default Book;
