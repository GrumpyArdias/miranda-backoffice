export type BookingType = {
  id: string;
  fullName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  specialRquest: string;
  roomType: string;
  roomId: string | null;
  status: string;
};

export interface IBookingState {
  bookings: BookingType[];
  booking: BookingType;
}

export type UpdateBooking = {
  id: string;
  body: BookingType;
};

export interface BookingProps {
  headerArray: string[];
  rowDataArray: BookingType[];
}
