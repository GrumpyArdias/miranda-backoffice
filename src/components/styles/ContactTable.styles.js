import styled from "@emotion/styled";

export const ContactTableStyle = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 20px auto;

  tbody {
    tr {
      padding: 8px;
      text-align: center;
      transition: all 0.3s;

      td {
        padding: 8px;
        text-align: center;
      }
      &:hover {
        scale: 1.02;
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
export const TdWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const StatusWrapper = styled.div`
  min-width: 100%;
`;
export const IconWrapper = styled.div``;
