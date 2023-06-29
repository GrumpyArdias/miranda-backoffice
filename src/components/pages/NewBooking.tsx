import React, { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getAllRooms } from "../../slices/roomsSlice";
import { createBookings } from "../../slices/bookingsSlice";
import {
  Wrapper,
  NewBookingForm,
  InputWrapper,
  Select,
  Input,
  SubmitInput,
} from "../styles/NewBooking.styles";
export function NewBooking() {
  const [booking, setBooking] = useState({
    id: "1",
    fullName: "",
    bookingDate: "",
    checkIn: "",
    checkOut: "",
    specialRquest: "Default",
    roomType: "",
    roomId: "",
    status: "",
  });
  const rooms = useAppSelector((state) => state.rooms.rooms);
  const dispatch = useAppDispatch();

  const date = new Date().toISOString();
  console.log("this is date", date);

  const handleBookingChange = (e: any) => {
    const { name, value } = e.target;
    setBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const room = rooms.find((room) => room.id === booking.roomId);

    const newBooking = {
      ...booking,
      roomType: room.bedType,
      bookingDate: date,
      checkIn: new Date(booking.checkIn).toISOString(),
      checkOut: new Date(booking.checkOut).toISOString(),
    };

    dispatch(createBookings(newBooking));
    // Perform form submission logic here
  };

  return (
    <>
      <Wrapper className="warapper">
        <NewBookingForm onSubmit={handleSubmit}>
          <InputWrapper>
            <h3>Name</h3>
            <Input
              type="text"
              id="name"
              name="fullName"
              value={booking.fullName}
              onChange={handleBookingChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <h3>Check In</h3>
            <Input
              type="date"
              id="checkIn"
              name="checkIn"
              value={booking.checkIn}
              onChange={handleBookingChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <h3>Check Out</h3>
            <Input
              type="date"
              id="checkOut"
              name="checkOut"
              value={booking.checkOut}
              onChange={handleBookingChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <h3>Room Type</h3>
            <Select
              id="roomId"
              name="roomId"
              value={booking.roomId}
              onChange={handleBookingChange}
              required
            >
              <option value="" hidden>
                Choose a room
              </option>
              {rooms.map((room) => {
                return (
                  <option key={room.id} value={room.id}>
                    {room.floorNumber}-{room.doorNumber} / {room.bedType}
                  </option>
                );
              })}
            </Select>
          </InputWrapper>
          <InputWrapper>
            <h3>Status</h3>
            <Select
              id="status"
              name="status"
              value={booking.status}
              onChange={handleBookingChange}
              required
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="Booked">Booked</option>
              <option value="InProgress">In Progress</option>
            </Select>
          </InputWrapper>

          <SubmitInput type="submit" value="Submit" />
        </NewBookingForm>
      </Wrapper>
    </>
  );
}
