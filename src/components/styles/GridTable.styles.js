import styled from "@emotion/styled";

export const BookingTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 20px auto;

  tbody {
    th {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
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
export const NotesAvalaible = styled.div`
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
export const NotNotesAvalible = styled.div`
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
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    padding: 10px;
  }
`;

export const PendingStatus = styled.div`
  background-color: yellow;
  color: #f9bc03;
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    padding: 10px;
  }
`;

export const CanceledStatus = styled.div`
  background-color: yellow;
  color: #f9bc03;
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;

  p {
    padding: 10px;
    text-align: center;
  }
`;
