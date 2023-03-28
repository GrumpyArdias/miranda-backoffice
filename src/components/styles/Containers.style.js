import styled from "@emotion/styled";

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
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const MainHeader = styled.header`
  display: flex;
  min-width: 90%;
  height: 60px;
  justify-content: space-between;
  align-content: center;
`;

export const LeftMainContainer = styled.div`
  display: flex;
  min-width: 10%;
  margin-top: 10px;

  flex-direction: column;
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      margin-left: 10px;
    }
  }
`;
