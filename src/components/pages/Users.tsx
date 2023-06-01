import {
  UsersTopWrap,
  UsersTopLeftWrap,
  UsersTopRightWrap,
  UserEditButton,
} from "../styles/Users.styles";
import Dropdown from "../Dropdown";

import UserTable from "../UsersTable";

import { getAllUsers } from "../../slices/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option: string) => {
    console.log(`Selected option: ${option}`);
  };

  const headerArray = ["Name", "Email", "Description", "Contact", "Status"];
  const rowDataArray = users;
  return (
    <>
      {" "}
      <UsersTopWrap>
        <UsersTopLeftWrap>
          <div className="Bookings-menu-cell">
            <h3>All Employee</h3>
          </div>
          <div className="Bookings-menu-cell">
            <h3>Active Employee</h3>
          </div>
          <div className="Bookings-menu-cell">
            <h3>Inactive Employee</h3>
          </div>
        </UsersTopLeftWrap>
        <UsersTopRightWrap>
          <UserEditButton
            data-cy="new-user-button"
            onClick={() => navigate("/users/newuser")}
          >
            <p>+ New Employee</p>
          </UserEditButton>
          <Dropdown options={options} onSelect={handleSelect} />
        </UsersTopRightWrap>
      </UsersTopWrap>
      <UserTable headerArray={headerArray} rowDataArray={rowDataArray} />
    </>
  );
}

export default Users;
