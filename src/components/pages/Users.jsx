import {
  UsersTopWrap,
  UsersTopLeftWrap,
  UsersTopRightWrap,
  UserEditButton,
} from "../styles/Users.styles";
import Dropdown from "../Dropdown";

import UserTable from "../UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../slices/userSlice";
import { useEffect } from "react";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, users]);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
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
          <UserEditButton>
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
