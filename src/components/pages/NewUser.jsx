import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { createUser } from "../../slices/userSlice";
import {
  Wrapper,
  NewUserForm,
  InputWrapper,
  Input,
  Select,
  SubmitButton,
} from "../styles/NewUser.Styles";

export function NewUser() {
  const initialObjet = {
    id: "",
    full_name: "",
    email: "",
    phone_number: "",
    description: "",
    number: "",
    status: "",
  };
  const [user, setUser] = useState(initialObjet);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleUserChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { ...user, id: uuid() };
    dispatch(createUser(newUser));
    setUser(initialObjet);
  };

  return (
    <Wrapper className="Wrapper">
      <NewUserForm action="" className="UserForm" onSubmit={handleSubmit}>
        <InputWrapper className="UserFullname">
          <h3>1. New Employee Full Name</h3>

          <Input
            data-cy="NewUserFullname"
            type="text"
            id="full_name"
            name="full_name"
            value={user.full_name}
            onChange={handleUserChange}
            required
          />
        </InputWrapper>
        <InputWrapper className="UserEmail">
          <h3>2. New Employee Email</h3>

          <Input
            data-cy="NewUserEmail"
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
          />
        </InputWrapper>
        <InputWrapper className="UserPhoneNumber">
          <h3>3. New Employee Phone Number</h3>

          <Input
            data-cy="NewUserPhoneNumber"
            type="text"
            id="number"
            name="number"
            value={user.number}
            onChange={handleUserChange}
          />
        </InputWrapper>
        <InputWrapper className="UserJobTitle">
          <h3>4. New Employee Job Title</h3>
          <Input
            data-cy="NewUserJobTitle"
            type="text"
            id="description"
            name="description"
            value={user.description}
            onChange={handleUserChange}
          />
        </InputWrapper>
        <InputWrapper className="UserStatus">
          <h3>5. User Status</h3>
          <Select
            data-cy="NewUserStatus"
            name="status"
            id="UserStatus"
            value={user.status}
            onChange={handleUserChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
        </InputWrapper>
        <SubmitButton
          data-cy="SubmitButton"
          data-testid="NewUserButtonTest"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </SubmitButton>
      </NewUserForm>
    </Wrapper>
  );
}
