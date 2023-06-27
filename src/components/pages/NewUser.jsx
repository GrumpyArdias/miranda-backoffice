import { useEffect, useState } from "react";
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
    fullName: "",
    email: "",
    number: "",
    jobTitle: "",
    joinDate: "",
    estatus: "",
    password: "",
  };
  const [user, setUser] = useState(initialObjet);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setUser(user);
  // }, [user]);

  const handleUserChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "estatus") value = event.target.value === "true";
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const joinDate = new Date().toISOString();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      ...user,
      joinDate: joinDate,
    };

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
            id="fullName"
            name="fullName"
            value={user.fullName}
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
            id="jobTitle"
            name="jobTitle"
            value={user.jobTitle}
            onChange={handleUserChange}
          />
        </InputWrapper>

        <InputWrapper className="UserJobTitle">
          <h3>5. New Employee Password</h3>
          <Input
            data-cy="NewUserJobTitle"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
          />
        </InputWrapper>
        <InputWrapper className="UserStatus">
          <h3>6. User Status</h3>
          <Select
            data-cy="NewUserStatus"
            name="estatus"
            id="estatus"
            value={user.estatus}
            onChange={handleUserChange}
          >
            <option value="" hidden>
              Choose
            </option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
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
