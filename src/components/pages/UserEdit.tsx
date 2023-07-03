import React from "react";
import { useState, useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { LoginContext } from "../../store/LoginContext";
import { getOneUser, updateUser } from "../../slices/userSlice";
import {
  Wrapper,
  NewUserForm,
  InputWrapper,
  Input,
  Select,
  SubmitButton,
} from "../styles/NewUser.Styles";
import { UserType } from "../../@types/users";

export function UserEdit() {
  const { state } = useContext(LoginContext);
  const dispatch = useAppDispatch();
  let userId = "";

  useEffect(() => {
    userId = localStorage.getItem("userId");
    if (state.authenticated) {
      console.log(userId);
    }
  }, [dispatch, state.authenticated]);

  const UserFromDb = useAppSelector((state) => state.users.user);
  const [user, setUser] = useState(UserFromDb);

  useEffect(() => {
    userId = localStorage.getItem("userId");
    dispatch(getOneUser(userId))
      .unwrap()
      .then((user) => setUser(user));
  }, [dispatch]);

  const handleUserChange = (event: any) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "estatus") value = event.target.value === "true";
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const updatedUser: UserType = {
      ...user,
    };

    dispatch(updateUser({ body: updatedUser, id: updatedUser.id }));
  };

  if (!user.id) {
    return <h3>Loading...</h3>;
  }

  return (
    <Wrapper className="Wrapper">
      <NewUserForm action="" className="UserForm" onSubmit={handleSubmit}>
        <InputWrapper className="UserFullname">
          <h3>1. Employee Full Name</h3>

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
          <h3>2. Employee Email</h3>

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
          <h3>3. Employee Phone Number</h3>

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
          <h3>4. Employee Job Title</h3>
          <Input
            data-cy="NewUserJobTitle"
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={user.jobTitle}
            onChange={handleUserChange}
          />
        </InputWrapper>
        <SubmitButton
          data-cy="SubmitButton"
          data-testid="NewUserButtonTest"
          type="submit"
        >
          Submit
        </SubmitButton>
      </NewUserForm>
    </Wrapper>
  );
}
