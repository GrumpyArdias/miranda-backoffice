import {
  RoomType,
  NewRoomForm,
  FormWrap,
  Price,
  PriceWrap,
  StatusWrapper,
  Floor,
  FloorWrapper,
  Select,
  Input,
  Discount,
  SubmitButton,
  FloorCell,
  Amenities,
} from "../styles/newRoom.styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function NewRoom() {
  const initialObjet = {
    price: "",
    discount: "",
    doorNumber: "",
    floorNumber: "",
    bedType: "",
    roomStatus: "",
    amenities: "",
  };

  const [room, setRoom] = useState(initialObjet);
  const [discountedPrice, setDiscountedPrice] = useState("");
  const dispatch = useDispatch();

  const handleAmenitiesChange = (e) => {
    const selectedAmenity = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setRoom({ ...room, amenities: [...room.amenities, selectedAmenity] });
    } else {
      setRoom({
        ...room,
        amenities: room.amenities.filter((item) => item !== selectedAmenity),
      });
    }
  };
  const handleRoomChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRoom((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(room);
    const calculatedDiscountedPrice =
      room.price - (room.price * room.discount) / 100;
    setDiscountedPrice(calculatedDiscountedPrice);
  }, [room.price, room.discount, room]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = "";
    setRoom((prev) => ({ ...prev, [name]: value }));
    event.target.reset();
    console.log("test");
  };

  return (
    <>
      <FormWrap onSubmit={handleSubmit}>
        <h2>New Room</h2>
        <NewRoomForm action="">
          <RoomType className="RoomType">
            <h3>1. Choose the Room Type</h3>
            <Select
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
          </RoomType>
          <h3>2. Choose Amenities</h3>
          <Amenities className="Amenities">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="wifi"
                checked={room.amenities.includes("wifi")}
                onChange={handleAmenitiesChange}
              />
              WiFi
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="tv"
                checked={room.amenities.includes("tv")}
                onChange={handleAmenitiesChange}
              />
              TV
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="ac"
                checked={room.amenities.includes("ac")}
                onChange={handleAmenitiesChange}
              />
              AC
            </label>

            <label>
              <input
                type="checkbox"
                name="amenities"
                value="fridge"
                checked={room.amenities.includes("fridge")}
                onChange={handleAmenitiesChange}
              />
              Mini Fridge
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="bathtub"
                checked={room.amenities.includes("bathtub")}
                onChange={handleAmenitiesChange}
              />
              Bathtub
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="sauna"
                checked={room.amenities.includes("sauna")}
                onChange={handleAmenitiesChange}
              />
              Sauna
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="roomService"
                checked={room.amenities.includes("roomService")}
                onChange={handleAmenitiesChange}
              />
              Room Service
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="butler"
                checked={room.amenities.includes("butler")}
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
                type="number"
                id="discount"
                name="discount"
                value={room.discount}
                onChange={handleRoomChange}
                required
              />
            </Discount>
          </PriceWrap>

          <div className="Status">
            <h3>4. Status</h3>
            <StatusWrapper className="StatusWrapper">
              <Select
                name="roomStatus"
                value={room.roomStatus}
                onChange={handleRoomChange}
                required
              >
                <option value="none">Room status</option>
                <option value="booked">Booked</option>
                <option value="available">Available</option>
              </Select>
            </StatusWrapper>
          </div>

          <Floor className="floor">
            <h3>5. Floor Choice</h3>
            <FloorWrapper className="floorWrapper">
              <FloorCell className="FloorCell">
                <label htmlFor="floor">Floor</label>
                <br />
                <Input
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
        <SubmitButton type="submit" onClick={handleSubmit}>
          Save the Room
        </SubmitButton>
      </FormWrap>
    </>
  );
}
