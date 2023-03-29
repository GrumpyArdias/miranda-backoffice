import styled from "@emotion/styled";
import Cat from "../../images/cat3.jpg";
import { Link } from "react-router-dom";

export const LeftMainContainer = styled.div`
  display: flex;
  min-width: 10%;
  margin-top: 10px;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;

  .cell {
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      margin-left: 10px;
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
