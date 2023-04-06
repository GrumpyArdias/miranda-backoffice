import {
  UsersTopWrap,
  UsersTopLeftWrap,
  UsersTopRightWrap,
  UserEditButton,
} from "../styles/Users.style";
import Dropdown from "../Dropdown";
import UserData from "../../Users.json";
import UserTable from "../UsersTable";

function Users() {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  const headerArray = ["Name", "Email", "Description", "Contact", "Status"];
  const rowDataArray = UserData;
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
