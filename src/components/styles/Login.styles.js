import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 100%;
  padding: 20px 40px;
  margin: 0 auto;
`;

export const MiniContainer = styled.div`
  max-width: 100%;
  padding: 0px 10px;
  margin: 10px auto;
  background-color: #ad9d82;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px black;
  flex-direction: column;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
  padding: 5px;
`;

export const LogoContainer = styled.div`
  margin: 10px auto;
`;
