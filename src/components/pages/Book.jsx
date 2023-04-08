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
} from "../styles/Book.styles";
import { useParams } from "react-router-dom";
import Bookings from "../../data/bookings.json";
import Rooms from "../../data/rooms.json";

function Book() {
  const { id } = useParams();

  const book = Bookings.find((obj) => obj.id === id);
  const room = Rooms.find((obj) => obj.id === id);

  console.log(`esto es el book ${book}`);
  console.log(`esto es el room ${room}`);

  console.log(`Esto es el ID de Book ${id}`);
  return (
    <BookWrapper className="BookWrapper">
      <BookLeft className="BookLeft">
        <BookLeftFirstBlock className="BookLeftFirstBlock">
          <UserInfo className="userInfo">
            <UserPhoto className="UserPhoto"> </UserPhoto>
            <UserData className="UserData">
              <h3>Placeholder</h3>
              <p>ID {id}</p>
            </UserData>
          </UserInfo>
          <Checks className="Checks"></Checks>
        </BookLeftFirstBlock>
        <BookLeftSecondBlock className="BookLeftSecondBlock"></BookLeftSecondBlock>
        <BookLeftThirdBlock className="BookLeftThirdBlock"></BookLeftThirdBlock>
      </BookLeft>
      <BookRight className="BookRight"></BookRight>
    </BookWrapper>
  );
}

export default Book;
