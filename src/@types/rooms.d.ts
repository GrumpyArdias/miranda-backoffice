export type RoomType = {
  id: string;
  bedType: string;
  status: boolean;
  facilites: string[];
  price: number;
  discount: number;
  doorNumber: number;
  floorNumber: number;
};

export interface IRoomsState {
  rooms: RoomType[];
  room: RoomType;
}
export type UpdateRoom = {
  id: string;
  body: RoomType;
};

export interface RoomProps {
  headerArray: string[];
  rowDataArray: RoomType[];
}
