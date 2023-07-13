import styled from "@emotion/styled";

export const RoomsTableStyle = styled.table`
  border-collapse: collapse;
  width: 90%;
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
    .check-box {
      scale: 1.15;
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
  padding-right: 5px;
  img {
    width: 120px;
    height: auto;
    border-radius: 5px;
  }
`;

export const TextRowWrapper = styled.div`
  margin-top: -25px;
  text-align: center;

  h5 {
    text-align: center;
  }
`;

export const AvailableStatus = styled.div`
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #e8ffee;
  color: #5ad07a;
  padding-right: 3px;

  p {
    padding: 10px;
  }
`;

export const BookedStatus = styled.div`
  max-width: 54%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #ffedec;
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

export const Chip = styled.div`
  margin: 0 auto;
  border: 1px solid #999578;
  background-color: #999578;
  border-radius: 15px;
  margin-bottom: 5px;
  color: white;
  max-width: 45%;
  padding: 5px 10px;
`;

export const BedWrapper = styled.div`
  padding: 5px;
  margin: 0 auto;
  border-radius: 15px;
  max-width: 67%;
`;
