import {
  UsersTopWrap,
  UsersTopLeftWrap,
  UsersTopRightWrap,
  UserEditButton,
} from "../styles/Users.styles";
import Dropdown from "../Dropdown";
import UserTable from "../UsersTable";
import { getAllUsers } from "../../slices/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { UserType } from "../../@types/users";
import { CommentType } from "../../@types/contacts";

function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const navigate = useNavigate();
  const [rowDataArray, setRowDataArray] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  useEffect(() => {
    setRowDataArray(users);
  }, [users]);

  const headerArray = ["Name", "Email", "Description", "Contact", "Status"];

  const handleUsers = (option: string) => {
    if (option === "active") {
      const active: UserType[] = [...users].filter((user) => user.estatus);

      return setRowDataArray(active);
    } else {
      const inactive: UserType[] = [...users].filter((user) => !user.estatus);
      return setRowDataArray(inactive);
    }
  };

  return (
    <>
      <UsersTopWrap>
        <UsersTopLeftWrap>
          <div
            className="Bookings-menu-cell"
            onClick={() => setRowDataArray(users)}
          >
            <h3>All Employee</h3>
          </div>
          <div
            className="Bookings-menu-cell"
            onClick={() => handleUsers("active")}
          >
            <h3>Active Employee</h3>
          </div>
          <div
            className="Bookings-menu-cell"
            onClick={() => handleUsers("inactive")}
          >
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
        </UsersTopRightWrap>
      </UsersTopWrap>
      <UserTable headerArray={headerArray} rowDataArray={rowDataArray} />
    </>
  );
}

export default Users;
