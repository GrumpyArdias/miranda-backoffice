import styled from "@emotion/styled";
import Cat from "../../images/cat3.jpg";
import { Link } from "react-router-dom";

export const LeftMainContainer = styled.div`
  display: flex;
  max-width: 10%;
  margin-top: 10px;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  border-left: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 30px;

  .cell {
    margin-left: 25px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      margin-left: 10px;
    }
    #hotelLogo {
      margin-left: -30px;
    }
  }
  .cell:hover {
    color: #ad9d82;
  }
  .lateralUser {
    margin: 10px auto;
    min-width: 90%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 30px;
    padding: -10px;
    text-align: center;
    border-radius: 18px;

    #UserPhoto {
      margin: 10px auto;
      width: 70px;
      height: 70px;
      object-fit: contain;
      background-image: url(${Cat});
      background-size: cover;
      border-radius: 5%;
    }
    #UserName {
      margin-top: 10px;
    }
    #UserEditButton {
      background-color: #ad9d82;
      margin: 10px auto;
      border: medium none;
      color: white;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 30px;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:active {
    color: #ad9d82;
  }
`;
