import styled from "@emotion/styled";

import Cat from "../../images/cat3.jpg";
export const Container = styled.div`
  max-width: 100%;
  padding: 20px 40px;
  margin: 0 auto;
`;

export const MiniContainer = styled.div`
  max-width: 40%;
  padding: 5px 10px;
  margin: 0 auto;
  background-color: #ad9d82;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px black;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const MainHeader = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  background-color: white;
  .mainHeaderLeft {
    min-width: "10%";
    margin-left: "2%";
    margin-top: "25px";
    display: "flex";
  }
  .mainHeaderRight {
    display: "flex";
    justify-content: "space-between";
    margin-top: "25px";
    margin-right: "20px";
    min-width: "10%";
    .iconCell:hover {
      color: #ad9d82;
    }
  }
`;

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
export const MainBody = styled.div`
  background-color: hsla(255, 3%, 23%, 5%);
  display: flex;
  flex-direction: column;
`;
export const Kpis = styled.div`
  margin: 0 auto;
  min-width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5%;

  .KpiCard {
    display: flex;
    margin-top: 50px;
    background-color: white;
    border-radius: 5%;
    margin-bottom: 10px;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);

    .KpiCardLogo {
      margin: 30px 30px;
      background-color: #ffedec;
      color: #e23428;
      padding: 20px 20px;
      border-radius: 5%;
      .icon {
        font-size: 4.188rem;
      }
    }
    .KpiCardText {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      h3 {
        text-align: left;
        font-size: 30px;
        margin-top: 10px;
      }
      p {
        margin-top: -30px;
        font-size: 14px;
        color: #787878;
      }
    }
  }
  .KpiCard:hover {
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
    transform: scale(1.1);
    .KpiCardLogo {
      background-color: #e23428;
      color: white;
    }
  }
`;
export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 40px;
  min-width: 80%;
  margin-left: 20px;
  h3 {
    text-align: left;
    margin-left: 30px;
  }
  .Reviews-wrapper {
    margin-left: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10%;
    margin-right: 30px;

    .Reviews-Cards {
      border: 1px solid lightgray;
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
