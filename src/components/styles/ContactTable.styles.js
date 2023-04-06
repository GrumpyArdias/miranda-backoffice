import styled from "@emotion/styled";

export const ContactTableStyle = styled.table`
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

export const ArchiveStatus = styled.div`
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;
  color: #5ad07a;

  p {
    padding: 10px;
  }
`;

export const NotArchiveStatus = styled.div`
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;
  color: #e23428;

  p {
    padding: 10px;
  }
`;
