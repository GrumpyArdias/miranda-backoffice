import {
  UsersTableStyle,
  DataRowWrapper,
  PhotoRowWrapper,
  TextRowWrapper,
  ActiveStatus,
  InactiveStatus,
  TdWrapper,
  StatusWrapper,
  IconWrapper,
} from "./styles/UserTable.style";
import { v4 as uuid } from "uuid";
import Cat from "../images/cat3.jpg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { deleteUser } from "../slices/userSlice";
function UserTable(props) {
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;

  const handleStatusSwitch = (status) => {
    switch (status) {
      case true:
        return (
          <ActiveStatus>
            <p>Active</p>
          </ActiveStatus>
        );
      case false:
        return (
          <InactiveStatus>
            <p>Inactive</p>
          </InactiveStatus>
        );

      default:
        return "error in the User Status";
    }
  };
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <UsersTableStyle>
      <thead>
        <tr>
          {headerArray.map((header) => {
            return (
              <th colSpan={2} key={uuid()}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rowDataArray.map((data, index) => {
          const employeeNumber = index + 1;
          return (
            <tr key={data.id}>
              <td colSpan={2}>
                <DataRowWrapper className="wrapper">
                  <PhotoRowWrapper className="image">
                    <img src={Cat} alt="it's employees face" />
                  </PhotoRowWrapper>
                  <TextRowWrapper className="text">
                    <h5>{data.full_name}</h5>
                    <p>
                      #{employeeNumber} <br />
                      {data.join_date}
                    </p>
                  </TextRowWrapper>
                </DataRowWrapper>
              </td>
              <td colSpan={2}>{data.email}</td>
              <td colSpan={2}>{data.description}</td>
              <td colSpan={2}>{data.number}</td>
              <td colSpan={2}>
                {" "}
                <TdWrapper className="TdWrapper">
                  <StatusWrapper>
                    {handleStatusSwitch(data.status)}
                  </StatusWrapper>
                  <IconWrapper>
                    <DeleteForeverIcon
                      data-cy="deleteButtonUser"
                      style={{ color: "red" }}
                      onClick={() => handleDelete(data.id)}
                    />
                  </IconWrapper>
                </TdWrapper>
              </td>
            </tr>
          );
        })}
      </tbody>
    </UsersTableStyle>
  );
}
export default UserTable;
