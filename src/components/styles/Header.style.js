import styled from "@emotion/styled";

export const MainHeader = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  background-color: white;
  .mainHeaderLeft {
    min-width: "10%";
    margin-left: "2%";
    margin-top: "25px";
    display: "flex";
  }
  .mainHeaderRight {
    display: "flex";
    justify-content: "space-between";
    margin-top: "25px";
    margin-right: "20px";
    min-width: "10%";
    .iconCell:hover {
      color: #ad9d82;
    }
  }
`;
