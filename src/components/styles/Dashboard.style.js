import styled from "@emotion/styled";
import Cat from "../../images/cat3.jpg";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
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
