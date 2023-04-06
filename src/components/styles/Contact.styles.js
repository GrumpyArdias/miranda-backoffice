import styled from "@emotion/styled";
import Cat from "../../images/cat3.jpg";

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 40px 40px;
  min-width: 90%;

  h3 {
    text-align: left;
    margin-left: 30px;
  }
  .Reviews-wrapper {
    margin-left: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10%;

    .Reviews-Cards {
      border: 1px solid lightgray;
      border-radius: 20px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      margin-right: 20px;
      .Reviews-text {
        margin-left: 30px;
        p {
          font-size: 16px;
          color: #4e4e4e;
          text-align: left;
        }
      }
      .Reviews-user {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        .Reviews-user-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-width: 40%;
          .Reviews-user-photo {
            margin-left: 30px;
            width: 70px;
            height: 70px;
            object-fit: contain;
            background-image: url(${Cat});
            background-size: cover;
            border-radius: 5%;
          }
          .Reviews-user-text {
            margin-left: 10px;
            p {
              margin-top: -20px;
            }
          }
        }
        .Reviews-user-feedback {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
      }
    }
  }
`;

export const ContactTopWrap = styled.div`
  margin-left: 78px;
  margin-right: 40px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ContactTopLeftWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  max-width: 22%;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid lightgray;
  .Rooms-menu-cell {
    h3 {
      margin: 5px 5px;
      font-size: 14px;
      text-align: right;
      color: #6e6e6e;
    }
  }
  .Rooms-menu-cell:hover {
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
export const ContactTopRightWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ContactTopSelect = styled.select`
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
