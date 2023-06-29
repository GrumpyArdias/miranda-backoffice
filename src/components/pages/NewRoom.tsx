import {
  RoomType,
  NewRoomForm,
  FormWrap,
  Price,
  PriceWrap,
  Floor,
  FloorWrapper,
  Select,
  Input,
  Discount,
  SubmitButton,
  FloorCell,
  Amenities,
} from "../styles/newRoom.styles";
import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { createRoom } from "../../slices/roomsSlice";
import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { RoomType as RoomTypeTS } from "../../@types/rooms";

export function NewRoom() {
  const initialObjet: RoomTypeTS = {
    id: "",
    bedType: "",
    estatus: false,
    facilities: [],
    price: 0,
    discount: 0,
    doorNumber: 0,
    floorNumber: 0,
  };

  const [room, setRoom] = useState(initialObjet);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const dispatch = useAppDispatch();

  const handleAmenitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedAmenity = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setRoom({ ...room, facilities: [...room.facilities, selectedAmenity] });
    } else {
      setRoom({
        ...room,
        facilities: room.facilities.filter((item) => item !== selectedAmenity),
      });
    }
  };
  const handleRoomChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setRoom((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const calculatedDiscountedPrice: number =
      room.price - (room.price * room.discount) / 100;
    setDiscountedPrice(calculatedDiscountedPrice);
  }, [room.price, room.discount, room]);

  const handleSubmit = (
    event: FormEvent<HTMLDivElement> | FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const newRoom = { ...room }; // Generate UUID for the new room
    dispatch(createRoom(newRoom));
    setRoom(initialObjet); // Reset the room state after submitting
  };

  return (
    <>
      <FormWrap onSubmit={handleSubmit}>
        <h2>New Room</h2>
        <NewRoomForm action="">
          <RoomType className="RoomType">
            <h3>1. Choose the Room Type</h3>
            <Select
              data-cy="roomType"
              name="bedType"
              value={room.bedType}
              onChange={handleRoomChange}
              required
            >
              <option value="none">Choose Bed Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="doubleSuperior">Double Superior</option>
              <option value="suite">Suite</option>
            </Select>
            <h3>2. Choose Amenities</h3>
          </RoomType>
          <Amenities className="Amenities">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="wifi"
                checked={room.facilities.includes("wifi")}
                onChange={handleAmenitiesChange}
              />
              WiFi
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="tv"
                checked={room.facilities.includes("tv")}
                onChange={handleAmenitiesChange}
              />
              TV
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="ac"
                checked={room.facilities.includes("ac")}
                onChange={handleAmenitiesChange}
              />
              AC
            </label>

            <label>
              <input
                type="checkbox"
                name="amenities"
                value="fridge"
                checked={room.facilities.includes("fridge")}
                onChange={handleAmenitiesChange}
              />
              Mini Fridge
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="bathtub"
                checked={room.facilities.includes("bathtub")}
                onChange={handleAmenitiesChange}
              />
              Bathtub
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="sauna"
                checked={room.facilities.includes("sauna")}
                onChange={handleAmenitiesChange}
              />
              Sauna
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="roomService"
                checked={room.facilities.includes("roomService")}
                onChange={handleAmenitiesChange}
              />
              Room Service
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="butler"
                checked={room.facilities.includes("butler")}
                onChange={handleAmenitiesChange}
              />
              Butler
            </label>
          </Amenities>
          <h3>3. Pricing and Discount</h3>
          <PriceWrap className="PriceWrap">
            <Price className="price">
              <label htmlFor="price">Price</label>
              <br />
              <Input
                data-cy="price"
                type="number"
                id="price"
                name="price"
                value={room.price}
                onChange={handleRoomChange}
                required
              />
            </Price>
            <h4>Discounted Price: {discountedPrice}</h4>
            <Discount className="discount">
              <label htmlFor="discount">Discount</label>
              <br />
              <Input
                data-cy="discount"
                type="number"
                id="discount"
                name="discount"
                value={room.discount}
                onChange={handleRoomChange}
                required
              />
            </Discount>
          </PriceWrap>

          {/* <div className="Status">
            <h3>4. Status</h3>
            <StatusWrapper className="StatusWrapper">
              <Select
                data-cy="roomStatus"
                name="roomStatus"
                value={room.status}
                onChange={handleRoomChange}
                required
              >
                <option value="booked">Booked</option>
                <option value="available">Available</option>
              </Select>
            </StatusWrapper>
          </div> */}

          <Floor className="floor">
            <h3>5. Floor Choice</h3>
            <FloorWrapper className="floorWrapper">
              <FloorCell className="FloorCell">
                <label htmlFor="floor">Floor</label>
                <br />
                <Input
                  data-cy="floor"
                  type="number"
                  id="floor"
                  name="floorNumber"
                  value={room.floorNumber}
                  onChange={handleRoomChange}
                  required
                />
              </FloorCell>
              <FloorCell className="FloorCell">
                <label htmlFor="door">Door</label>
                <br />
                <Input
                  data-cy="door"
                  type="number"
                  id="door"
                  name="doorNumber"
                  value={room.doorNumber}
                  onChange={handleRoomChange}
                  required
                />
              </FloorCell>
            </FloorWrapper>
          </Floor>
        </NewRoomForm>
        <SubmitButton
          data-cy="SubmitButton"
          type="submit"
          onClick={handleSubmit}
        >
          Save the Room
        </SubmitButton>
      </FormWrap>
    </>
  );
}
