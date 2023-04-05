import {
  RoomsTableStyle,
  DataRowWrapper,
  PhotoRowWrapper,
  TextRowWrapper,
  NotesAvalaible,
  NotNotesAvalible,
  RefoundStatus,
  BookedStatus,
  PendingStatus,
  CanceledStatus,
} from "./styles/RoomsTable.styles";
import { v4 as uuid } from "uuid";
import Cat from "../images/cat3.jpg";

function RoomsTable(props) {
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;

  const handleRoomSwitch = (option) => {
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

  const handleDiscount = (cost) => {
    const fixedDiscount = 10;
    const discountPrice = (cost * fixedDiscount) / 100;
    const finalPrice = cost - discountPrice;

    return finalPrice;
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
                    <h5>{data.room_id}</h5>
                  </TextRowWrapper>
                </DataRowWrapper>
              </td>
              <td colSpan={2}>{handleRoomSwitch(data.room_type)}</td>
              <td colSpan={2}> {data.amenities}</td>
              <td colSpan={2}> {data.price} € / Night</td>
              <td colSpan={2}>
                {handleDiscount(data.price)} € <br /> (-10% off)
              </td>
            </tr>
          );
        })}
      </tbody>
    </RoomsTableStyle>
  );
}
export default RoomsTable;
