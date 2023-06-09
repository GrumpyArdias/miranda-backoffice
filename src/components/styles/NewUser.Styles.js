import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 40%;
  margin: 0 auto;
  border: 1px solid #ad9d82;
`;

export const NewUserForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export const Input = styled.input`
  height: 20px;
  width: 100%;
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
  margin-bottom: 50px;
  height: 40px;
  width: 40%;
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
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  outline: none;
  color: #000; /* Text color inside the dropdown */
  background-color: #fff; /* Background color of the dropdown */
  :hover {
    border-color: #888;
    :focus {
      border-color: #555;

      option {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;
