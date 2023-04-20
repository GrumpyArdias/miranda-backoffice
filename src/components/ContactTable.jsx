import {
  ContactTableStyle,
  ArchiveStatus,
  NotArchiveStatus,
  TdWrapper,
  StatusWrapper,
  IconWrapper,
} from "./styles/ContactTable.styles";
import { v4 as uuid } from "uuid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { deleteContact } from "../slices/contactSlice";

function ContactTable(props) {
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;
  const dispatch = useDispatch();

  const handleStatusSwitch = (status) => {
    switch (status) {
      case true:
        return (
          <ArchiveStatus>
            <p>Inactive</p>
          </ArchiveStatus>
        );
      case false:
        return (
          <NotArchiveStatus>
            <p>Acttive</p>
          </NotArchiveStatus>
        );

      default:
        return "error in the User Status";
    }
  };

  const handleComentSwitch = (coment) => {
    switch (coment) {
      case true:
        return (
          <ArchiveStatus>
            <p>Good</p>
          </ArchiveStatus>
        );
      case false:
        return (
          <NotArchiveStatus>
            <p>Bad</p>
          </NotArchiveStatus>
        );

      default:
        return "error in the Coment Status";
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactTableStyle>
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
          return (
            <tr key={uuid()}>
              <td colSpan={2}>{data.id}</td>
              <td colSpan={2}>{data.date}</td>
              <td colSpan={2}>{data.full_name}</td>
              <td colSpan={2}>{data.email}</td>
              <td colSpan={2}>{data.phone}</td>
              <td colSpan={2}>{data.subjet}</td>
              <td colSpan={2}>{handleComentSwitch(data.coment)}</td>
              <td colSpan={2}>
                <TdWrapper className="TdWrapper">
                  <StatusWrapper>
                    {handleStatusSwitch(data.action)}
                  </StatusWrapper>
                  <IconWrapper>
                    <DeleteForeverIcon
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
    </ContactTableStyle>
  );
}

export default ContactTable;
