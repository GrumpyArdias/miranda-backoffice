import {
  ContactTableStyle,
  DataRowWrapper,
  PhotoRowWrapper,
  TextRowWrapper,
  ArchiveStatus,
  NotArchiveStatus,
} from "./styles/ContactTable.styles";
import Cat from "../images/cat3.jpg";
import { v4 as uuid } from "uuid";

function ContactTable(props) {
  const headerArray = props.headerArray;
  const rowDataArray = props.rowDataArray;

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
              <td colSpan={2}>{handleStatusSwitch(data.action)}</td>
            </tr>
          );
        })}
      </tbody>
    </ContactTableStyle>
  );
}

export default ContactTable;
