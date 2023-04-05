import styled from "@emotion/styled";

export const RoomsTableStyle = styled.table`
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
  }
`;
