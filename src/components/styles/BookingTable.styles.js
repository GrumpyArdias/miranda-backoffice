import styled from "@emotion/styled";

export const BookingTableStyle = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 20px auto;

  tbody {
    tr {
      padding: 8px;
      text-align: center;

      td {
        padding: 8px;
        text-align: center;
      }
      &:hover {
        scale: 1.05;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 30px;
      }
    }
    .check-box {
      scale: 2;
      text-align: center;
    }
  }
`;

export const DataRowWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  max-width: 50%;
  margin: 0 auto;
  padding-top: 20px;
`;
export const PhotoRowWrapper = styled.div`
  img {
    width: 40px;
    height: auto;
    border-radius: 5px;
  }
`;

export const TextRowWrapper = styled.div`
  margin-top: -25px;

  h5 {
    margin-top: -20px;
  }
`;
export const NotesAvailable = styled.div`
  background-color: #e8ffee;
  color: #5ad07a;
  max-width: 40%;
  margin: 0 auto;
  border-radius: 10px;
  p {
    padding: 10px;
  }

  :hover {
    cursor: pointer;
  }
`;
export const NotNotesAvailable = styled.div`
  background-color: #ffedec;
  color: #e23428;
  max-width: 40%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    padding: 10px;
  }
`;

export const RefoundStatus = styled.div`
  background-color: #ffedec;
  color: #e23428;
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    padding: 10px;
  }
`;

export const BookedStatus = styled.div`
  background-color: #e8ffee;
  color: #5ad07a;
  max-width: 70%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    padding: 10px;
  }
`;

export const PendingStatus = styled.div`
  background-color: yellow;
  color: #f9bc03;
  max-width: 70%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    text-align: center;
    padding: 10px;
  }
`;

export const CanceledStatus = styled.div`
  background-color: yellow;
  color: #f9bc03;
  max-width: 70%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    padding: 10px;
    text-align: center;
  }
`;

export const TdWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const StatusWrapper = styled.div`
  min-width: 60%;
`;
export const IconWrapper = styled.div``;
