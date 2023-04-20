import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 40%;
  margin: 0 auto;
  border: 1px solid #ad9d82;
`;

export const NewUserForm = styled.form``;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  height: 20px;
  width: 20%;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 15px auto;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;
export const SubmitButton = styled.button`
  margin-top: 50px;
  height: 40px;
  width: 20%;
  border-radius: 20px;
  padding: 10px;
  background-color: #ad9d82;
  color: #fff;
  &:hover {
    background-color: #999578;
  }
  &:active {
    background-color: #999578;
  }
  border: none;
  outline: none;
  cursor: pointer;
`;
export const Select = styled.select`
  height: 50px;
  width: 20%;
  text-align: center;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  margin: 0 auto;

  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;
