import styled from "@emotion/styled";

export const UsersTableStyle = styled.table`
  border-collapse: collapse;
  width: 80%;
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
    width: 100px;
    height: auto;
    border-radius: 5px;
  }
`;

export const TextRowWrapper = styled.div`
  margin-top: -25px;
  text-align: center;

  h5 {
    text-align: center;
    margin-bottom: -10px;
  }
`;

export const ActiveStatus = styled.div`
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #e8ffee;
  color: #5ad07a;

  p {
    padding: 10px;
  }
`;

export const InactiveStatus = styled.div`
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #ffedec;
  color: #e23428;

  p {
    padding: 10px;
  }
`;
