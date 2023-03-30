import styled from "@emotion/styled";

export const HeaderItem = styled.div``;
export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
export const DataItem = styled.div`
  text-align: center;
  flex-grow: 1;
  h5 {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const GridContainer = styled.div`
  max-width: 80%;
`;
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px white;
  max-width: 80%;
  margin: 0 auto;
`;
export const DataItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;
