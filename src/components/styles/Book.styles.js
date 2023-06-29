import styled from "@emotion/styled";
import Cat from "../../images/cat3.jpg";
export const BookWrapper = styled.div`
  margin: 20px auto;
  max-width: 90%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 30px;
  border: 1px solid black;
  margin-top: 40px;

  gap: 10px;
`;
export const BookLeft = styled.div`
  max-width: 50%;
  margin-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BookRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  max-width: 50%;

  img {
    max-width: 100%;
  }
`;
export const BookLeftFirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #799283;
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const UserPhoto = styled.div`
  min-width: 156px;
  min-height: 156px;
  background-image: url(${Cat});
  background-size: cover;
  border-radius: 10px;
`;
export const UserData = styled.div`
  margin-left: 10px;
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  justify-content: center;
  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: -10px;
  }
  p {
    text-align: center;
    font-size: 10px;
    color: #799283;
  }
`;
export const Checks = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const CheckIn = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #799283;
  }
  h3 {
    margin-top: -10px;
  }
`;
export const CheckOut = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #799283;
  }
  h3 {
    margin-top: -10px;
  }
`;
export const BookLeftSecondBlock = styled.div``;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #799283;
  }
  h3 {
    margin-top: -10px;
  }
`;

export const RoomPrice = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #799283;
  }
  h3 {
    margin-top: -10px;
  }
`;

export const TextInfo = styled.div``;

export const BookLeftThirdBlock = styled.div``;
