import styled from "@emotion/styled";

export const UsersTopWrap = styled.div`
  margin-left: 78px;
  margin-right: 40px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const UsersTopLeftWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  max-width: 22%;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid lightgray;
  .Bookings-menu-cell {
    h3 {
      margin: 5px 5px;
      font-size: 14px;
      text-align: right;
      color: #6e6e6e;
    }
  }
  .Bookings-menu-cell:hover {
    color: #ad9d82;
    border-bottom: 2px solid #ad9d82;
    h3 {
      margin: 5px 5px;
      font-size: 14px;
      text-align: right;
      color: #ad9d82;
    }
  }
`;
export const UsersTopRightWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const UsersTopSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px 5px;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ad9d82;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.2s ease-in-out;
  color: white;
  text-align: center;
  margin-left: 10px;
  &:hover,
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ad9d82;
  }
  p {
    margin: 5px 5pxe;
  }
`;
export const UserEditButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-align: center;
  border: 1px solid black;
  background-color: #ad9d82;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e8e41;
  }
`;
