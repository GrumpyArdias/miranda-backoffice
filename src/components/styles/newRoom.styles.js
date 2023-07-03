import styled from "@emotion/styled";

export const NewRoomForm = styled.form``;
export const FormWrap = styled.div`
  background-color: white;
  min-width: 40%;
  margin: 5% auto;
  border: 1px solid #ad9d82;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PriceWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
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
  margin-bottom: 10px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
`;
export const FloorCell = styled.div`
  min-width: 60%;
`;
export const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  outline: none;
  color: #000; /* Text color inside the dropdown */
  background-color: #fff; /* Background color of the dropdown */
  :hover {
    border-color: #888;
    :focus {
      border-color: #555;

      option {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;
export const Input = styled.input`
  height: 20px;
  width: 40%;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px auto;

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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 0px;
`;
