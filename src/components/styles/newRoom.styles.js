import styled from "@emotion/styled";

export const NewRoomForm = styled.form``;
export const FormWrap = styled.div`
  min-width: 50%;
  background-color: white;
  margin: 5% auto;
  border: 1px solid #ad9d82;
  padding: 20px;
`;
export const PriceWrap = styled.div`
  display: flex;
  max-width: 80%;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 50px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 70%;
  justify-content: center;
`;
export const InputCell = styled.div``;
export const RoomType = styled.div`
  margin-bottom: 50px;
`;

export const Price = styled.div`
  min-width: 60%;
`;
export const Discount = styled.div`
  min-width: 60%;
`;

export const StatusWrapper = styled.div`
  margin-top: -10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 50px;
`;
export const StatusCell = styled.div``;
export const Floor = styled.div``;

export const FloorWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 80%;
  justify-content: center;
  margin-bottom: 50px;
`;
export const FloorCell = styled.div`
  min-width: 60%;
`;
export const Select = styled.select`
  height: 50px;
  width: 20%;
  text-align: center;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;

  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;
export const Input = styled.input`
  height: 40px;
  width: 20%;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const SubmitButton = styled.button`
  margin-top: 50px;
  height: 40px;
  width: 20%;
  border-radius: 20px;
  padding: 10px;
  background-color: #ad9d82;
  color: #fff;
  &:hover {
    background-color: #999578;
  }
  &:active {
    background-color: #999578;
  }
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Amenities = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
`;
