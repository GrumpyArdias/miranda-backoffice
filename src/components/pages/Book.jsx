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
import Rooms from "../../data/rooms.json";
import { getOneBook } from "../../slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Book() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const OneBook = useSelector((state) => state.bookings.book);

  useEffect(() => {
    console.log(`esto es el ${id}`);
    dispatch(getOneBook(id));
    console.log(typeof id);
    console.table(OneBook);
  }, [dispatch, OneBook, id]);

  const room = Rooms.find((obj) => obj.id === id);

  return (
    <BookWrapper className="BookWrapper">
      <BookLeft className="BookLeft">
        <BookLeftFirstBlock className="BookLeftFirstBlock">
          <UserInfo className="userInfo">
            <UserPhoto className="UserPhoto"> </UserPhoto>
            <UserData className="UserData">
              <h3>{OneBook.full_name}</h3>
              <p>ID {id}</p>
            </UserData>
          </UserInfo>
          <Checks className="Checks">
            <CheckIn className="CheckIn">
              <p>Check In</p>
              <h3>{OneBook.check_in}</h3>
            </CheckIn>
            <CheckOut className="CheckOut">
              <p>Check Out</p>
              <h3>{OneBook.check_out}</h3>
            </CheckOut>
          </Checks>
        </BookLeftFirstBlock>
        <BookLeftSecondBlock className="BookLeftSecondBlock">
          <Info className="info">
            <RoomInfo className="RoomInfo">
              <p>Room Info</p>
              <h3>{room.bed_type.toUpperCase()}</h3>
            </RoomInfo>
            <RoomPrice className="Price">
              <p>Room Price</p>
              <h3>$150 / Night</h3>
            </RoomPrice>
          </Info>
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
      <BookRight className="BookRight"></BookRight>
    </BookWrapper>
  );
}

export default Book;
