import {
  RoomType,
  NewRoomForm,
  FormWrap,
  Price,
  InputWrap,
  InputCell,
  PriceWrap,
  StatusWrapper,
  StatusCell,
  Floor,
  FloorWrapper,
} from "../styles/newRoom.styles";
import { useState } from "react";

export function NewRoom() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [bedType, setBedType] = useState("");

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    const discountAmount = (newPrice * discount) / 100;
    const newDiscountedPrice = newPrice - discountAmount;
    setDiscountedPrice(newDiscountedPrice);
  };
  const handleDiscountChange = (e) => {
    const newDiscount = Number(e.target.value);
    if (newDiscount >= 0 && newDiscount <= 100) {
      setDiscount(newDiscount);
      const discountAmount = (price * newDiscount) / 100;
      const newDiscountedPrice = price - discountAmount;
      setDiscountedPrice(newDiscountedPrice);
    }
  };

  const handleFloorChange = (e) => {
    const newFloorNumber = Number(e.target.value);

    if (newFloorNumber >= 1 && newFloorNumber <= 5) {
      setFloorNumber(newFloorNumber);
      console.log(`this is the newFloorNumber ${floorNumber}`);
    }
  };

  const handleDoorChange = (e) => {
    const newDoorNumber = Number(e.target.value);

    if (newDoorNumber >= 1 && newDoorNumber <= 20) {
      setDoorNumber(newDoorNumber);
      console.log(`this is the newDoorNumber ${doorNumber}`);
    }
  };

  const handleBedType = (value) => {
    setBedType(value);
    console.log(`this is the bed Type ${bedType}`);
  };

  return (
    <>
      <FormWrap>
        <h2>New Room</h2>
        <NewRoomForm action="">
          <RoomType className="RoomType">
            <h3>1. Choose the Room Type</h3>
            <InputWrap className="InputWrap">
              <InputCell className="InputCell">
                <input
                  type="radio"
                  id="single"
                  name="roomType"
                  onChange={() => {
                    handleBedType("single");
                  }}
                />
                <label htmlFor="single">Single</label>
              </InputCell>
              <InputCell className="InputCell">
                <input
                  type="radio"
                  id="double"
                  name="roomType"
                  onChange={() => {
                    handleBedType("double");
                  }}
                />
                <label htmlFor="double">Double</label>
              </InputCell>
              <InputCell className="InputCell">
                <input
                  type="radio"
                  id="doubleSuperior"
                  name="roomType"
                  onChange={() => {
                    handleBedType("doubleSuperior");
                  }}
                />
                <label htmlFor="doubleSuperior">Double Superior</label>
              </InputCell>
              <InputCell className="InputCell">
                <input
                  type="radio"
                  id="suite"
                  name="roomType"
                  onChange={() => {
                    handleBedType("suite");
                  }}
                />
                <label htmlFor="suite">Suite</label>
              </InputCell>
            </InputWrap>
          </RoomType>
          <h3>2. Pricing and Discount</h3>
          <PriceWrap className="PriceWrap">
            <Price className="price">
              <label htmlFor="price">Price</label>
              <br />
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={handlePriceChange}
              />
            </Price>
            <div className="discount">
              <label htmlFor="discount">Discount</label>
              <br />
              <input
                type="number"
                id="price"
                name="price"
                max="100"
                value={discount}
                onChange={handleDiscountChange}
              />
            </div>
          </PriceWrap>
          <h4>Discounted Price: ${discountedPrice}</h4>

          <div className="Status">
            <h3>3. Status</h3>
            <StatusWrapper className="StatusWrapper">
              <StatusCell className="StatusCell">
                <input type="radio" id="booked" name="availability" />
                <label htmlFor="booked">Booked</label>
              </StatusCell>
              <StatusCell className="StatusCell">
                <input type="radio" id="available" name="availability" />
                <label htmlFor="available">Available</label>
              </StatusCell>
            </StatusWrapper>
          </div>

          <Floor className="floor">
            <h3>4. Floor Choice</h3>
            <FloorWrapper className="floorWrapper">
              <div className="FloorCell">
                <label htmlFor="floor">Floor</label>
                <br />
                <input
                  type="number"
                  id="floor"
                  name="floor"
                  value={floorNumber}
                  max="5"
                  onChange={handleFloorChange}
                />
              </div>
              <div className="FloorCell">
                <label htmlFor="door">Door</label>
                <br />
                <input
                  type="number"
                  id="door"
                  name="door"
                  max="20"
                  value={doorNumber}
                  onChange={handleDoorChange}
                />
              </div>
            </FloorWrapper>
          </Floor>
        </NewRoomForm>
      </FormWrap>
    </>
  );
}
